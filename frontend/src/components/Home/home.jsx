import React, { useEffect } from "react";
import "./home.css";
import * as THREE from "three";
import moonImage from "../../images/moon.jpg";
import venusImage from "../../images/venus.jpg"
import spaceImage from "../../images/space.jpg"
const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);


    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });
    // for cube 
    const moonGeometry = new THREE.SphereGeometry(2,64,64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map:moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3,64,64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map:venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);

    const pointlight = new THREE.PointLight(0xffffff,1);
    const pointlight2 = new THREE.PointLight(0xffffff,0.1);

    
    scene.add(moon);
    scene.add(venus);
    scene.background = spaceTexture;
    scene.add(pointlight);
    scene.add(pointlight2);

    pointlight.position.set(8,5,5);
    pointlight2.position.set(-8,-5,-5);
    
    const  constspeed = 0.01;
  window.addEventListener("mousemove" ,(e)=>{
  if (e.clientX <= window.innerWidth / 2) {
  moon.rotation.x -= constspeed;
  moon.rotation.y += constspeed;
  venus.rotation.x -= constspeed;
  venus.rotation.y += constspeed;
}

  if (e.clientX > window.innerWidth / 2) {
  moon.rotation.x -= constspeed;  
  moon.rotation.y -= constspeed;
  venus.rotation.x -= constspeed;  
  venus.rotation.y -= constspeed;
}
    if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constspeed;
        moon.rotation.y += constspeed;
        venus.rotation.x -= constspeed;
        venus.rotation.y += constspeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constspeed;
        moon.rotation.y -= constspeed;
        venus.rotation.x -= constspeed;
        venus.rotation.y -= constspeed;
      }

    })
  
    
    venus.position.set(8,5,5);
    camera.position.set(4,4,8);
    
  const animate = () => {
  requestAnimationFrame(animate);
  moon.rotation.y += 0.001; 
  venus.rotation.y += 0.001; 
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
};
  animate();
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
    </div>
  );
};

export default Home;