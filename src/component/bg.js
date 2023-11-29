import * as THREE from 'three';
import { useRef,useEffect } from 'react';
import "../css/bg.css"

function Bg(){
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

        //particle
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesmaterial = new THREE.PointsMaterial({
            size: 0.02,
            transparent: true,
        });
        //별 외형?
        const particlesCnt = 300;
        //별 갯수
        const posArray = new Float32Array(particlesCnt * 3);
        //별갯수x3
        // xyz,xyz,xyz , xyz
        for (let i = 0; i < particlesCnt * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * (Math.random() * 30);
        }

        particlesGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(posArray, 3)
        );
        const particlesMesh = new THREE.Points(particlesGeometry, particlesmaterial);
        scene.add(particlesMesh);
        const clock = new THREE.Clock();

        const animate = () => {
            window.requestAnimationFrame(animate);
            const delta = clock.getDelta();
            particlesMesh.rotation.y -= delta/30;

            if(window.scrollY >= 970){
            particlesMesh.rotation.x += delta/30;

            }
            if(window.scrollY >= 1850){
            particlesMesh.position.y -= delta / 3;
                if (particlesMesh.position.y < -10) {
                    particlesMesh.position.y = 10;
                } // 무한으로 떨어지는 거 구현
                }
            if(window.scrollY >= 6000){// 떨어지는거임
            particlesMesh.rotation.z += delta/30;
            particlesMesh.position.y -= delta / 1;
            }
            renderer.render(scene, camera);
        };
    animate();
  })
  return(
    <section id="bgSection" ref={sky}>
    </section>
  );
} 
export default Bg;

