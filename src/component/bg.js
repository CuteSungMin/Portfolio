import * as THREE from 'three';
import { useRef, useEffect} from 'react';
import "../css/bg.css"

function Bg({inputValues}){
    const {bgColor} = inputValues;
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
        const particlesMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('white') }); //입자 색
        const particlesMeshes = [];
        for (let i = 0; i < 500; i++) {
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
                particle.position.y -= delta / 10; // y축으로 떨어지기
                if (particle.position.y < -2) {
                    particle.position.set(
                        (Math.random() - 0.5) * (Math.random() * 10),
                        (Math.random() - 0.5) * (Math.random() * 10),
                        (Math.random() - 0.5) * (Math.random() * 10)
                    );
                } // 무한으로 떨어지는 거 구현
            });
            renderer.render(scene, camera);
        };
    animate();
  }, [bgColor])
  return(
    <section id="bgSection" style={{backgroundColor : bgColor}} ref={sky}>
    </section>
  );
} 
export default Bg;