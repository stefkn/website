import React from "react"
import * as $ from "three"
import gsap from "gsap"
import {EffectComposer, RenderPass} from "postprocessing";
import styled from 'styled-components';

class HeaderAnimation extends React.Component {
  componentDidMount() {
    // get the basics done
    const renderer = new $.WebGLRenderer({ antialias: false });
    const scene = new $.Scene();
    const camera = new $.PerspectiveCamera(75, 2, .1, 100);
    const composer = new EffectComposer(renderer);

    // fit canvas to header block
    window.addEventListener('resize', () => {
        if (window.location.pathname === '/') {
            const { clientWidth, clientHeight } = renderer.domElement;
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(clientWidth, clientHeight, false);
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
            composer.setSize(document.getElementById('header-wrapper').clientWidth, document.getElementById('header-wrapper').clientHeight);
        }
    });

    // let's set this thing up
    document.getElementById('header-animation-container').append(renderer.domElement);
    renderer.domElement.setAttribute("id", "animation-canvas");
    renderer.domElement.style.position = 'sticky';
    document.getElementById('header-animation-container').style.position = 'sticky';
    document.getElementById('header-animation-container').style.top = '-894px';
    window.dispatchEvent(new Event('resize'));
    renderer.setAnimationLoop(t => {
        composer.render();
    });

    // ----
    // Main
    // ----

    scene.background = new $.Color('#0014fe');
    // scene.fog = new $.Fog(scene.background, 3, 2);
    camera.position.set(0, 0, 5);

    // Make Non Indexed Geometry
    let geom;
    {
        // const geom_ = new $.TorusKnotBufferGeometry(5, .3, 30, 4, 4, 6);
        // const geom_ = new $.TorusKnotBufferGeometry( 10, 3, 10, 4 );
        const geom_ = new $.TorusKnotBufferGeometry(12, 3, 12, 4, 1, 8 );
        geom = geom_.toNonIndexed();
        geom_.dispose();
    }

    const positions0 = new Float32Array(geom.attributes.position.array.length);

    // Compute Morph Attrib - Normal
    const geom_ = new $.BufferGeometry();
    geom_.setAttribute('position', new $.BufferAttribute(positions0, 6));
    geom_.computeVertexNormals();
    geom.morphAttributes.position = [geom_.attributes.position];
    geom.morphAttributes.normal = [geom_.attributes.normal];
    geom_.dispose();

    // Make Mesh{}
    const mat = new $.MeshBasicMaterial( { color: '#000867' } );
    const mesh = new $.Mesh(geom, mat);
    mesh.morphTargetInfluences = [1, 1];
    scene.add(mesh);

    // PostProcessing
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    gsap.timeline({ repeat: 1e10 })
        .to(mesh.rotation, { duration: 50, y: Math.PI * 2, ease: 'none' })
        .play();
    // gsap.timeline({ repeat: 1e10 })
    //     .to(light1, { duration: 1, distance: 0.1, ease: 'bounce' })
    //     .play()

    // toggle pause on click
    // window.addEventListener('mousedown', () => {
    //     if (timeline1.paused()) {
    //         timeline1.play();
    //         timeline2.play();
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