import React from "react"
import * as $ from "three"
import gsap from "gsap"
import {EffectComposer, RenderPass} from "postprocessing";
import styled from 'styled-components';

// var OrbitControls = require('three-orbit-controls')($)

class HeaderAnimation extends React.Component {
  componentDidMount() {

    const renderer = new $.WebGLRenderer({ antialias: false });
    const scene = new $.Scene();
    const camera = new $.PerspectiveCamera(75, 2, .1, 100);
    const composer = new EffectComposer(renderer);
    // const controls = new OrbitControls(camera, renderer.domElement);

    // fit canvas to header block
    window.addEventListener('resize', () => {
        if (window.location.pathname === '/') {
            // code for index page
            // console.log("windowResize");
            const { clientWidth, clientHeight } = renderer.domElement;
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(clientWidth, clientHeight, false);
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
            // composer.setPixelRatio(window.devicePixelRatio);
            // console.log(document.getElementById('header-wrapper').clientHeight)
            // document.getElementById('header-animation-container').height = document.getElementById('header-wrapper').clientHeight;
            // document.getElementById('header-animation-container').width = window.width;
            // composer.setSize(clientWidth, clientHeight);
            composer.setSize(document.getElementById('header-wrapper').clientWidth, document.getElementById('header-wrapper').clientHeight);
        }
    });

    window.addEventListener('scroll', () => {
        // TODO: When it's almost out of frame, make the position: static and height just the navbar height
        // const animationCanvas = document.getElementById('animation-canvas');
        // const domRect = animationCanvas.getBoundingClientRect();
        // console.log(domRect.bottom);
        // if (domRect.bottom < 76 && animationCanvas.style.position === 'absolute') {
        //     animationCanvas.style.position = 'fixed';
        //     animationCanvas.style.bottom = '94vh';
        // }
        // if (domRect.bottom >= 76 && animationCanvas.style.position === 'fixed') {
        //     animationCanvas.style.position = 'absolute';
        //     animationCanvas.style.bottom = 'auto';
        // }
    })

    // Hide animation button
    // const disableButton = document.getElementById('disable-animation-btn');
    // function handleToggleAnimation () {
    //     const animationContainer = document.getElementById('header-animation-container');
    //     if (animationContainer.style.display != "none") {
    //         document.getElementById('header-animation-container').style.display = "none";
    //         document.getElementById('disable-animation-text').innerHTML = "🎞";
    //     } else {
    //         document.getElementById('header-animation-container').style.display = "block";
    //         document.getElementById('disable-animation-text').innerHTML = "🎞✕";
    //     }
    // }
    // disableButton.addEventListener('click', () => handleToggleAnimation())
    // disableButton.addEventListener('touch', () => handleToggleAnimation())

    // begin
    document.getElementById('header-animation-container').append(renderer.domElement);
    renderer.domElement.setAttribute("id", "animation-canvas");
    renderer.domElement.style.position = 'sticky';
    // renderer.domElement.style.top = '-68vh';
    document.getElementById('header-animation-container').style.position = 'sticky';
    document.getElementById('header-animation-container').style.top = '-894px';
    window.dispatchEvent(new Event('resize'));
    renderer.setAnimationLoop(t => {
        composer.render();
        // controls.update();
    });
    // renderer.setAnimationLoop(t => {
    //     composer.render();
    // });

    // ----
    // Main
    // ----

    scene.background = new $.Color('#0014ff');
    // scene.fog = new $.Fog(scene.background, 2.5, 5);
    camera.position.set(0, 0, 5);

    // const light0 = new $.DirectionalLight('#fe317e', 1);
    // scene.add(light0);

    // const light1 = new $.PointLight('red', 1, 8, 0);
    // scene.add(light1);

    //// Make Non Indexed Geometry

    let geom;
    {
        const geom_ = new $.TorusKnotBufferGeometry(5, .3, 30, 4, 4, 6);
        geom = geom_.toNonIndexed();
        geom_.dispose();
    }

    //// Compute Morph Attrib - Position

    const positions0 = new Float32Array(geom.attributes.position.array.length);
    const $vec0 = new $.Vector3();
    const $vec1 = new $.Vector3();
    const $vec2 = new $.Vector3();
    const $norm = new $.Vector3();
    const $tri0 = new $.Triangle();
    const $mat0 = new $.Matrix4();
    const $mat1 = new $.Matrix4();
    const $euler = new $.Euler();
    const $arr = geom.attributes.position.array;
    for (let i = 0, I = $arr.length; i < I; i += 9) {
        $tri0.set(
            $vec0.set($arr[i + 0], $arr[i + 1], $arr[i + 2]),
            $vec1.set($arr[i + 3], $arr[i + 4], $arr[i + 5]),
            $vec2.set($arr[i + 6], $arr[i + 7], $arr[i + 8])
        ).getNormal($norm);
        // $norm.multiplyScalar(2);
        $mat0.makeTranslation($norm.x, $norm.y, $norm.z);
        $mat1.makeRotationFromEuler($euler.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI));
        $mat0.multiplyMatrices($mat1, $mat0);
        $vec0.applyMatrix4($mat0);
        $vec1.applyMatrix4($mat0);
        // $vec2.applyMatrix4($mat0);
        positions0.set($vec0.toArray(), i);
        positions0.set($vec1.toArray(), i + 3);
        positions0.set($vec2.toArray(), i + 6);
    }

    //// Compute Morph Attrib - Normal

    const geom_ = new $.BufferGeometry();
    geom_.setAttribute('position', new $.BufferAttribute(positions0, 3));
    geom_.computeVertexNormals();
    geom.morphAttributes.position = [geom_.attributes.position];
    geom.morphAttributes.normal = [geom_.attributes.normal];
    geom_.dispose();

    //// Make Mesh{}

    // const mat = new $.MeshPhongMaterial({
    //     morphTargets: true, morphNormals: false, side: $.DoubleSide,
    //     transparent: true, opacity: 0.5, depthWrite: true
    // });
    const mat = new $.MeshBasicMaterial( { color: 0xffff00 } );
    const mesh = new $.Mesh(geom, mat);
    // mesh.morphTargetInfluences = [1, 1];
    scene.add(mesh);

    // const geometry = new $.TorusKnotBufferGeometry( 10, 3, 100, 16 );
    // const material = new $.MeshBasicMaterial( { color: 'fe317e' } );
    // const torusKnot = new $.Mesh( geometry, material );
    // scene.add( torusKnot );

    //// PostProcessing

    const renderPass = new RenderPass(scene, camera);
    // const unrealBloomPass = new UnrealBloomPass(renderer.getDrawingBufferSize(), 1, 1, 0.5);
    composer.addPass(renderPass);
    // composer.addPass(unrealBloomPass);

    //// Animate

    // gsap.timeline({ repeat: 1e10 })
        // .to(mesh.morphTargetInfluences, { duration: 10, '0': 0.1, ease: 'bounce' })
        // .to(mesh.morphTargetInfluences, { delay: 10, duration: 3, '0': 2, ease: 'power2' })
        // .play();
    const timeline1 = gsap.timeline({ repeat: 1e10 })
        .to(mesh.rotation, { duration: 400, y: Math.PI * 2, ease: 'none' })
        .play();
    const timeline2 = gsap.timeline({ repeat: 1e10 })
        .to(mesh.rotation, { duration: 600, x: Math.PI * 2, ease: 'none' })
        .play();
    // gsap.timeline({ repeat: 1e10 })
    //     .to(light1, { duration: 1, distance: 0.1, ease: 'bounce' })
    //     .play()

    // toggle pause on click
    // window.addEventListener('mousedown', () => {
    //     if (timeline1.paused()) {
            // timeline1.play();
            // timeline2.play();
    //     } else {
    //         timeline1.pause();
    //         timeline2.pause();
    //     }
    // })
  }

  render() {
    const HeaderAnimContainer = styled.div`
        canvas {
            width: 100%;
            height: 70.5vh;
            display: block;
            position: absolute;
            background: #0014ff;
        }
    `
    return (
      <HeaderAnimContainer id={`header-animation-container`}></HeaderAnimContainer>
    )
  }
}

export default HeaderAnimation