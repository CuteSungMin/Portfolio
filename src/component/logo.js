import * as THREE from 'three';
import { useRef, useEffect} from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import model from '../img/ProjectLogo.glb'
import "../css/logo.css"

const Logo = ({inputValues, textColor}) => {
    const {bgColor} = inputValues;

    const topSec1 = ()=>{
        window.scrollTo({
            top: `950`,
            behavior: `smooth`
        })
    }
    const topSec2 = ()=>{
        window.scrollTo({
            top: `1800`,
            behavior: `smooth`
        })
    }
    const topSec3 = ()=>{
        window.scrollTo({
            top: `2650`,
            behavior: `smooth`
        })
    }


    const intro = useRef()
    useEffect(() => {  
        const introCurrnet = intro.current

    //render
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true 
    });
    renderer.setSize(introCurrnet.clientWidth,  introCurrnet.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    introCurrnet.appendChild(renderer.domElement);

    //scene
    const scene = new THREE.Scene();

    //camera
    const camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.25,
        100
    );
    camera.position.z = 10;
    scene.add(camera)

    //빛
    const point = new THREE.PointLight('white' , 1000)
    point.position.y = 2;
    
    const point1 = new THREE.PointLight('white' , 1000)
    point1.position.z = 2;
    scene.add(point,point1)

    //오르빗 마우스로 움직에 할 수 있음
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.enableZoom = false; //줌 삭제
    controls.mouseButtons.RIGHT = null; //오른쪽 마우스 삭제

    //GLTF logo이미지 가져오기
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(model, (gltf)=>{
        const imgs = gltf.scene.children[0];
        scene.add(imgs)
        imgs.position.z = -10;
        imgs.position.y = 1;
        animateModel(imgs)

    })
    //애니메이션
    const animateModel = (model) =>{
        const animate = ()=>{
            controls.update()
            controls.rotateSpeed = 0.5;
            controls.minPolarAngle = Math.PI / 2.7 //최소 각도
            controls.maxPolarAngle = Math.PI /1.5 // 최대 각도
            model.rotation.z += 0.002
            renderer.render(scene,camera);
            renderer.setAnimationLoop(animate)
        }
        animate()
    }
    renderer.render(scene, camera)

    if(isMobileDevice()){
        introCurrnet.style.pointerEvents ='none';
        controls.enabled = false;
    }
    window.addEventListener('resize', ()=>{
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(introCurrnet.clientWidth, introCurrnet.clientHeight);
        renderer.render(scene,camera);
    });
    
 },)
    //모바일 버전 제한
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    return (
        <section className='introLogo' ref={intro}>
            <div className='introNav' style={{backgroundColor : bgColor, borderBottom :`1px solid ${textColor}`}}>
                <p style={{color : textColor}} onClick={topSec1}>History</p>
                <p style={{color : textColor}} onClick={topSec2}>Support</p>
                <p style={{color : textColor}} onClick={topSec3}>Project</p>
            </div>
 
        </section>
     );
}
export default Logo;