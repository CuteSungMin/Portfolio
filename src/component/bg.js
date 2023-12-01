import * as THREE from 'three';
import { useRef, useEffect, useState } from 'react';
import "../css/bg.css"

function Bg({inputValues}){
    const {bgColor, cubeColor, cubeSpeed} = inputValues;
    const sky = useRef();
    useEffect(()=>{
        
    
        const skys = sky.current
        // Scene
        const scene = new THREE.Scene();
        //size
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        //camera
        const camera = new THREE.PerspectiveCamera(
            75,
            sizes.width / sizes.height,
            0.1,
            100
        );
        camera.position.z = 2;
        scene.add(camera);
        //renderer
        
        const renderer = new THREE.WebGLRenderer({
            canvas: document.createElement("canvas"),
            antialias: true,
            alpha: true 
        });

        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0.0);
        
        skys.appendChild(renderer.domElement);

        window.addEventListener("resize", () => {
            // Update sizes
            sizes.width = skys.clientWidth;
            sizes.height = skys.clientHeight;

            // Update camera
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            // Update renderer
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });
        // Objects

        // 입자
        const particlesGeometry = new THREE.BoxGeometry(0.003,0.003,0.003);  // 입자의 크기임
        const particlesMaterial = new THREE.MeshBasicMaterial({ color: cubeColor || 'white' }); //입자 색
        const particlesMeshes = [];
        console.log(cubeColor)
        for (let i = 0; i < 1000; i++) {
            const particlesMesh = new THREE.Mesh(particlesGeometry, particlesMaterial);
            particlesMesh.position.x = (Math.random() - 0.5) * (Math.random() * 10);
            particlesMesh.position.y = (Math.random() - 0.5) * (Math.random() * 10);
            particlesMesh.position.z = (Math.random() - 0.5) * (Math.random() * 10);
            scene.add(particlesMesh);
            particlesMeshes.push(particlesMesh);
        }


        const clock = new THREE.Clock();
        const animate = () => {
            window.requestAnimationFrame(animate);
            const delta = clock.getDelta();
            particlesMeshes.forEach((particle) => {
                particle.position.y -= delta / 20; // y축으로 떨어지기
                if (particle.position.y < -3) {
                    particle.position.y = 3;
                } // 무한으로 떨어지는 거 구현

                if(window.scrollY >= 970){
                    particle.rotation.x -= delta/30;
                }
                if(window.scrollY >= 1890){
                    particle.rotation.z += delta/30;
                    }
            });



            renderer.render(scene, camera);
        };
    animate();
  }, [bgColor, cubeColor, cubeSpeed])
  return(
    <section id="bgSection" ref={sky}>
    </section>
  );
} 
export default Bg;

