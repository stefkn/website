import React from "react"
import * as $ from "three"
import gsap from "gsap"
import {EffectComposer} from "postprocessing";
import styled from 'styled-components';

class HeaderAnimation extends React.Component {
  componentDidMount() {
    let container;
    let camera, scene, renderer;

    let theta = 0;
    const radius = 10;

    container = document.createElement( 'div' );
    document.body.appendChild( container );

    camera = new $.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.layers.enable( 0 ); // enabled by default
    camera.layers.enable( 1 );
    camera.layers.enable( 2 );

    scene = new $.Scene();
    scene.background = new $.Color('#0000ef');

    const light = new $.PointLight( 'white', 1 );
    light.layers.enable( 0 );
    light.layers.enable( 1 );
    light.layers.enable( 2 );

    scene.add( camera );
    camera.add( light );

    const colors = [ '#1e31ff', '#fe317e', '#2e317e' ];
    const geometry = new $.BoxBufferGeometry( 50, 30, 40 );

    for ( let i = 0; i < 40; i ++ ) {
        const layer = ( i % 3 );
        const object = new $.Mesh( geometry, new $.MeshPhongMaterial({
            morphTargets: false, morphNormals: false, side: $.DoubleSide,
            transparent: true, opacity: 0.7, depthWrite: false, color: colors[ layer ]
        }));
        object.position.x = Math.random() * 800 - 400;
        object.position.y = Math.random() * 800 - 400;
        object.position.z = Math.random() * 800 - 400;
        object.rotation.x = Math.random() * 2 * Math.PI;
        object.rotation.y = Math.random() * 2 * Math.PI;
        object.rotation.z = Math.random() * 2 * Math.PI;
        object.scale.x = Math.random() + 0.9;
        object.scale.y = Math.random() + 0.5;
        object.scale.z = Math.random() + 0.6;
        object.layers.set( layer );
        scene.add( object );
    }
    renderer = new $.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    // fit canvas to header block
    window.addEventListener('resize', () => {
        if (window.location.pathname === '/') {
            const { clientWidth, clientHeight } = renderer.domElement;
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(clientWidth, clientHeight, false);
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(document.getElementById('header-wrapper').clientWidth, document.getElementById('header-wrapper').clientHeight);
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
    container.appendChild( renderer.domElement );

    // let's set this thing up
    document.getElementById('header-animation-container').append(renderer.domElement);
    renderer.domElement.setAttribute("id", "animation-canvas");

    // sticky navbar on scroll down
    renderer.domElement.style.position = 'sticky';
    document.getElementById('header-animation-container').style.position = 'sticky';


    function animate() {
        requestAnimationFrame( animate );
        render();
    }

    function render() {
        theta += 0.1;
        camera.position.x = radius * Math.sin( $.MathUtils.degToRad( theta ) );
        camera.position.y = radius * Math.sin( $.MathUtils.degToRad( theta ) );
        camera.position.z = radius * Math.cos( $.MathUtils.degToRad( theta ) );
        camera.lookAt( scene.position );
        renderer.render( scene, camera );
    }

    animate()
    window.dispatchEvent(new Event('resize'));
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