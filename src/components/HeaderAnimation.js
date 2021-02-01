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

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    function respondToViewportResize() {
        if (window.location.pathname === '/') {
            const { clientWidth, clientHeight } = renderer.domElement;
            renderer.setPixelRatio(window.devicePixelRatio/5); // TODO: ---> Make this conditional on xtra wide high def screens
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
            // Make the wrapper and nav transparent -- they are occluding the HeaderAnim while it loads
            document.getElementById('header-wrapper').style.backgroundColor = '#ffffff00';
            document.getElementsByTagName('nav')[0].style.backgroundColor = '#ffffff00';
        }
    }

    const debouncedResize = debounce(respondToViewportResize, 400);

    // fit canvas to header block
    window.addEventListener('resize', () => {
        debouncedResize();
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
            height: 60em;
            display: block;
            position: absolute;
            background-color: #2f39ae;
            z-index: 1;
        }
    `
    return (
      <HeaderAnimContainer id={`header-animation-container`}></HeaderAnimContainer>
    )
  }
}

export default HeaderAnimation