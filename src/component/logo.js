import * as THREE from 'three';
import { useRef, useEffect, useState } from 'react';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import model from '../img/ProjectLogo.glb';
import '../css/logo.css';

const Logo = ({ inputValues, textColor }) => {
  const { bgColor } = inputValues;

  const topSec1 = () => {
    window.scrollTo({
      top: `970`,
      behavior: `smooth`,
    });
  };
  const topSec2 = () => {
    window.scrollTo({
      top: `1850`,
      behavior: `smooth`,
    });
  };
  const topSec3 = () => {
    window.scrollTo({
      top: `2700`,
      behavior: `smooth`,
    });
  };

  //시간 계산
  const [howLong, setHowLong] = useState({ days: 0, hours: 0, minutes: 0 });
  const updateHowLong = () => {
    const targetDate = new Date('2023-05-31T00:00:00');
    setInterval(() => {
      const nowDate = new Date();
      const longDate = nowDate - targetDate;
      const realHours = Math.floor(longDate / (1000 * 60 * 60));
      const days = Math.floor(realHours / 24);
      const hours = Math.floor(realHours);
      setHowLong({ days, hours});
    }, 1000);
  };

  const intro = useRef();

  useEffect(() => {
    const introCurrnet = intro.current;

    // render
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(introCurrnet.clientWidth, introCurrnet.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    introCurrnet.appendChild(renderer.domElement);

    // scene
    const scene = new THREE.Scene();

    // camera
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.25,
      100
    );
    camera.position.z = 10;
    scene.add(camera);

    // light
    const point = new THREE.PointLight('white', 1000);
    point.position.y = 2;

    const point1 = new THREE.PointLight('white', 1000);
    point1.position.z = 2;
    scene.add(point, point1);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.mouseButtons.RIGHT = null;

    // GLTF logo 가져오기
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(model, (gltf) => {
      const logoModel = gltf.scene.children[0];
      scene.add(logoModel);
      logoModel.position.z = -10;
      logoModel.position.y = -3;
      animateModel(logoModel);
    });

    // animation
    const animateModel = (model) => {
      const animate = () => {
        controls.update();
        controls.rotateSpeed = 0.5;
        controls.minPolarAngle = Math.PI / 2.7;
        controls.maxPolarAngle = Math.PI / 1.5;
        model.rotation.z += 0.002;
        renderer.render(scene, camera);
        renderer.setAnimationLoop(animate);
      };
      animate();
    };

    renderer.render(scene, camera);

    if (isMobileDevice()) {
      introCurrnet.style.pointerEvents = 'none';
      controls.enabled = false;
    }

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(introCurrnet.clientWidth, introCurrnet.clientHeight);
      renderer.render(scene, camera);
    });

    // updateHowLong 함수 호출
    updateHowLong();
  }, []);

  // mobile version check
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  return (
    <section className='introLogo' ref={intro}>
      <div className='introNav' style={{ backgroundColor: bgColor, borderBottom: `1px solid ${textColor}` }}>
        <p style={{ color: textColor }} onClick={topSec1}>
          History
        </p>
        <p style={{ color: textColor }} onClick={topSec2}>
          Support
        </p>
        <p style={{ color: textColor }} onClick={topSec3}>
          Project
        </p>
      </div>
      <div className='introTitle'>
        <div className='introTitleTextWrap'>
            <div className='introTitleText'>
                <p style={{ color: textColor }}>{howLong.days}일</p>
                <p style={{ color: textColor }}>{howLong.hours} 시간</p>
            </div>
            <div className='introTitleTextClone'>
                <p style={{ color: textColor }}>{howLong.days}일</p>
                <p style={{ color: textColor }}>{howLong.hours} 시간</p>
            </div>
        </div>
        <div className='introText'>
            <p style={{ color: textColor }}>의 신입 
            <br/>FRONT-END 
            <br/>DEVELOPER</p>
        </div>
      </div>

    </section>
  );
};

export default Logo;