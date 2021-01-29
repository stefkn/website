import React from "react"
import * as $ from "three"
import gsap from "gsap"
import {EffectComposer, RenderPass} from "postprocessing";
import styled from 'styled-components';

class HeaderAnimation extends React.Component {
  componentDidMount() {
    // get the basics done
    const renderer = new $.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
    const scene = new $.Scene();
    const camera = new $.PerspectiveCamera(75, 2, .1, 100);
    const composer = new EffectComposer(renderer);

    // fit canvas to header block
    window.addEventListener('resize', () => {
        if (window.location.pathname === '/') {
            const { clientWidth, clientHeight } = renderer.domElement;
            renderer.setPixelRatio(window.devicePixelRatio/4); // TODO: ---> Make this conditional on xtra wide high def screens
            renderer.setSize(clientWidth, clientHeight, false);
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
            composer.setSize(document.getElementById('header-wrapper').clientWidth, document.getElementById('header-wrapper').clientHeight);
            // Sticky navbar responsiveness
            switch (true) {
                case clientWidth > 1199:
                    document.getElementById('header-animation-container').style.top = '-811px';
                break;
                case clientWidth > 991:
                    document.getElementById('header-animation-container').style.top = '-641px';
                break;
                case clientWidth > 767:
                    document.getElementById('header-animation-container').style.top = '-1111px';
                break;
                case clientWidth > 575:
                    document.getElementById('header-animation-container').style.top = '-894px';
                break;
                default:
                    document.getElementById('header-animation-container').style.top = '-781px';
            }
        }
    });

    // let's set this thing up
    document.getElementById('header-animation-container').append(renderer.domElement);
    renderer.domElement.setAttribute("id", "animation-canvas");

    // sticky navbar on scroll down
    renderer.domElement.style.position = 'sticky';
    document.getElementById('header-animation-container').style.position = 'sticky';

    // ----
    // Main
    // ----

    window.dispatchEvent(new Event('resize'));
    renderer.setAnimationLoop(t => {
        composer.render();
    });

    scene.background = new $.Color('#2f39ae');
    camera.position.set(0, 0, 5);

    // Make Non Indexed Geometry
    let geom;
    {
        // const geom_ = new $.TorusKnotBufferGeometry( 10, 3, 50, 4 );
        const geom_ = new $.TorusKnotBufferGeometry( 12, 3, 30, 3 );
        geom = geom_.toNonIndexed();
        geom_.dispose();
    }

    const positions0 = new Float32Array(geom.attributes.position.array.length);

    // Compute Morph Attrib - Normal
    const geom_ = new $.BufferGeometry();
    geom_.setAttribute('position', new $.BufferAttribute(positions0, 6));

    // Make Mesh{}
    const mat = new $.MeshBasicMaterial( { color: '#fc2980', wireframe: true } );
    const mesh = new $.Mesh(geom, mat);
    mesh.morphTargetInfluences = [1, 1];
    scene.add(mesh);

    // PostProcessing
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    gsap.timeline({ repeat: 1e10 })
        .to(mesh.rotation, { duration: 50, y: Math.PI * 2, ease: 'none' })
        .play();
    gsap.timeline({ repeat: 1e10 })
        .to(mesh.rotation, { duration: 200, x: Math.PI * 2, ease: 'none' })
        .play();
  }

  render() {
    const HeaderAnimContainer = styled.div`
        canvas {
            width: 98vw;
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