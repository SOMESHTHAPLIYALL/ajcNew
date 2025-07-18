import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import icon1 from "../assets/pictures/icon1.png";
import icon2 from "../assets/pictures/icon2.png";
import icon3 from "../assets/pictures/icon3.png";
import icon4 from "../assets/pictures/icon4.png";
import icon5 from "../assets/pictures/icon5.png";
import icon6 from "../assets/pictures/icon6.png";
import icon7 from "../assets/pictures/icon7.png";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import earthTexture from "../assets/pictures/earth2.jpg";
import earthBump from "../assets/pictures/earth-bump.jpg";
import earthSpecular from "../assets/pictures/earth-specular.jpg";

const Power = ({ id }) => {
  const globeRef = useRef(null);
  const [activeCountry, setActiveCountry] = useState(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const highlightRingRef = useRef(null);
  const rendererRef = useRef(null);
  const [isSceneReady, setIsSceneReady] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const countries = [
    { name: "India", lat: 4.5937, long: 71.9629, color: 0x00ff88 },
    { name: "South-East Asia", lat: 1.3521, long: 103.8198, color: 0x00ff88 },
    { name: "China", lat: 20.8617, long: 90.1954, color: 0x00ff88 },
    { name: "USA", lat: 37.0902, long: -95.7129, color: 0x00ff88 },
    { name: "Europe", lat: 53.0, long: 9.0, color: 0x00ff88 },
  ];

  const industries = [
    {
      name: "Basic Chemicals & Solvents",
      icon: icon1,
      position: {
        desktop: { top: "1%", left: "2%" },
        tablet: { top: "10%", left: "10%" },
        tabletLandscape: { top: "15%", left: "5%" },
        mobile: { order: 1 },
      },
    },
    {
      name: "Agrochemicals",
      icon: icon2,
      position: {
        desktop: { top: "8%", left: "35%" },
        tablet: { top: "10%", left: "50%" },
        tabletLandscape: { top: "15%", left: "30%" },
        mobile: { order: 2 },
      },
    },
    {
      name: "Specialty Chemicals",
      icon: icon3,
      position: {
        desktop: { top: "8%", right: "15%" },
        tablet: { top: "10%", right: "10%" },
        tabletLandscape: { top: "15%", right: "20%" },
        mobile: { order: 3 },
      },
    },
    {
      name: "Polymers & Plastics",
      icon: icon4,
      position: {
        desktop: { bottom: "45%", left: "50%" },
        tablet: { top: "60%", left: "10%" },
        tabletLandscape: { top: "60%", left: "5%" },
        mobile: { order: 4 },
      },
    },
    {
      name: "Flavor & Fragrances",
      icon: icon5,
      position: {
        desktop: { bottom: "45%", right: "-5%" },
        tablet: { top: "60%", left: "50%" },
        tabletLandscape: { top: "60%", left: "30%" },
        mobile: { order: 5 },
      },
    },
    {
      name: "Electronic Chemicals",
      icon: icon6,
      position: {
        desktop: { top: "0%", right: "-10%" },
        tablet: { top: "60%", right: "10%" },
        tabletLandscape: { top: "60%", right: "20%" },
        mobile: { order: 6 },
      },
    },
    {
      name: "Personal & Home Care",
      icon: icon7,
      position: {
        desktop: { bottom: "50%", left: "18%" },
        tablet: { top: "60%", left: "30%" },
        tabletLandscape: { top: "60%", left: "15%" },
        mobile: { order: 7 },
      },
    },
  ];

  useEffect(() => {
    if (!globeRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x00140c);
    scene.fog = new THREE.FogExp2(0x00140c, 0.1);

    const camera = new THREE.PerspectiveCamera(
      45,
      globeRef.current.clientWidth / globeRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    rendererRef.current = renderer;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(
      globeRef.current.clientWidth,
      globeRef.current.clientHeight
    );
    globeRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight1.position.set(1, 1, 1);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x00aaff, 0.5);
    directionalLight2.position.set(-1, -1, -1);
    scene.add(directionalLight2);

    const geometry = new THREE.SphereGeometry(0.6, 64, 64);

    const markerMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.8,
    });

    countries.forEach((country) => {
      const phi = (90 - country.lat) * (Math.PI / 180);
      const theta = (country.long + 180) * (Math.PI / 180);

      const markerGeometry = new THREE.SphereGeometry(0.02, 16, 16);
      const marker = new THREE.Mesh(markerGeometry, markerMaterial.clone());
      marker.position.set(
        -Math.sin(phi) * Math.cos(theta) * 0.62,
        Math.cos(phi) * 0.62,
        Math.sin(phi) * Math.sin(theta) * 0.62
      );
      marker.userData = { country: country.name };
      scene.add(marker);
    });

    const ringGeometry = new THREE.RingGeometry(0.05, 0.08, 32);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
    });
    const highlightRing = new THREE.Mesh(ringGeometry, ringMaterial);
    highlightRingRef.current = highlightRing;
    highlightRing.visible = false;
    scene.add(highlightRing);

    const loadTextures = async () => {
      const textureLoader = new THREE.TextureLoader();

      try {
        const earthMap = await textureLoader.loadAsync(earthTexture);
        const bumpMap = await textureLoader.loadAsync(earthBump);
        const specularMap = await textureLoader.loadAsync(earthSpecular);

        const material = new THREE.MeshPhongMaterial({
          map: earthMap,
          bumpMap: bumpMap,
          bumpScale: 0.05,
          specularMap: specularMap,
          specular: new THREE.Color(0x111111),
          shininess: 5,
        });

        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);

        const controls = new OrbitControls(camera, renderer.domElement);
        controlsRef.current = controls;
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;

        setIsSceneReady(true);

        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
        animate();
      } catch (error) {
        console.error("Error loading textures:", error);
        const material = new THREE.MeshPhongMaterial({
          color: 0x0000ff,
          specular: 0x111111,
          shininess: 10,
        });
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);

        setIsSceneReady(true);

        const animate = () => {
          requestAnimationFrame(animate);
          globe.rotation.y += 0.005;
          renderer.render(scene, camera);
        };
        animate();
      }
    };

    loadTextures();

    const handleResize = () => {
      if (globeRef.current) {
        const width = globeRef.current.clientWidth;
        const height = globeRef.current.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (
        globeRef.current &&
        renderer.domElement.parentNode === globeRef.current
      ) {
        globeRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      setIsSceneReady(false);
    };
  }, []);

  useEffect(() => {
    if (
      !isSceneReady ||
      !activeCountry ||
      !sceneRef.current ||
      !cameraRef.current ||
      !highlightRingRef.current
    )
      return;

    const country = countries.find((c) => c.name === activeCountry);
    if (!country) return;

    const phi = (90 - country.lat) * (Math.PI / 180);
    const theta = (country.long + 180) * (Math.PI / 180);

    const x = -Math.sin(phi) * Math.cos(theta) * 0.62;
    const y = Math.cos(phi) * 0.62;
    const z = Math.sin(phi) * Math.sin(theta) * 0.62;

    highlightRingRef.current.position.set(x, y, z);
    highlightRingRef.current.lookAt(cameraRef.current.position);
    highlightRingRef.current.visible = true;

    let opacity = 0;
    let scale = 1;
    const duration = 1000;
    const startTime = Date.now();

    const animateHighlight = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      opacity = Math.sin(progress * Math.PI * 2) * 0.5 + 0.5;
      scale = 1 + Math.sin(progress * Math.PI * 4) * 0.2;

      highlightRingRef.current.material.opacity = opacity * 0.8;
      highlightRingRef.current.scale.set(scale, scale, scale);
      highlightRingRef.current.lookAt(cameraRef.current.position);

      if (activeCountry) {
        requestAnimationFrame(animateHighlight);
      } else {
        highlightRingRef.current.visible = false;
      }
    };

    animateHighlight();

    if (controlsRef.current) {
      const direction = new THREE.Vector3(x, y, z).normalize();
      const distance = 2.5; // You can tweak this
      const targetPosition = direction.clone().multiplyScalar(distance);
      const startPosition = cameraRef.current.position.clone();
      const startTime = Date.now();
      const duration = 1000;

      const animateCamera = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 10);

        const t = 1 - Math.pow(1 - progress, 3);
        cameraRef.current.position.lerpVectors(
          startPosition,
          targetPosition,
          t
        );

        if (progress < 1) {
          requestAnimationFrame(animateCamera);
        }
      };

      animateCamera();
    }

    return () => {
      if (highlightRingRef.current) {
        highlightRingRef.current.visible = false;
      }
    };
  }, [activeCountry, isSceneReady]);

  return (
    <div id={id} className="text-white py-12 px-4 sm:px-6 lg:h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-[Outfit] sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-8 ">
          Industries we power
        </h2>

        <p className=" text-lg font-[Roboto]  text-center mb-8 md:mb-16">
          From Molecules to Markets - Navigating the Chemical Universe
        </p>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          <div className="hidden md:block relative w-full lg:w-1/2 h-[500px] md:h-[600px] lg:h-[700px]">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="absolute z-10 flex flex-col items-center group"
                style={
                  windowWidth >= 1024
                    ? industry.position.desktop
                    : windowWidth >= 768
                    ? window.innerHeight > window.innerWidth
                      ? industry.position.tablet
                      : industry.position.tabletLandscape
                    : industry.position.tablet
                }
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#96f7ea] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 -z-10 scale-90 group-hover:scale-110" />
                  <img
                    src={industry.icon}
                    alt={industry.name}
                    className={`w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 mb-2 md:mb-3 object-contain transition-all duration-300 
                    group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(150,247,234,0.6)] cursor-pointer ${
                      windowWidth < 1024 ? "w-14 h-14" : ""
                    }`}
                  />
                </div>
                <p
                  className={`text-center font-[Roboto] text-xs md:text-sm lg:text-base lg:w-[120px] transition-all duration-300
                  group-hover:text-[#96f7ea] group-hover:font-medium ${
                    windowWidth < 1024 ? "text-xs w-[80px]" : ""
                  }`}
                >
                  {industry.name}
                </p>
              </div>
            ))}
          </div>

          <div className="md:hidden grid grid-cols-2 gap-4 mb-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`group relative flex flex-col items-center p-4 rounded-lg ${
                  index === industries.length - 1 ? "col-span-2 mx-auto" : ""
                }`}
                style={{
                  maxWidth: index === industries.length - 1 ? "50%" : "100%",
                }}
              >
                <div className="absolute inset-0 rounded-lg bg-[#96f7ea] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 -z-10 scale-90 group-hover:scale-110" />
                <div className="relative">
                  <img
                    src={industry.icon}
                    alt={industry.name}
                    className="w-20 h-20 sm:w-16 sm:h-16 mb-2 object-contain transition-all duration-300
                   group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(150,247,234,0.6)] cursor-pointer"
                  />
                </div>
                <p
                  className="text-center text-xs sm:text-sm transition-all duration-300
                  group-hover:text-[#96f7ea] group-hover:font-medium"
                >
                  {industry.name}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex justify-center">
              <div
                ref={globeRef}
                className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden relative cursor-grab active:cursor-grabbing"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-5 mt-6 md:mt-8 lg:mt-10">
              {countries.map((country) => (
                <div
                  key={country.name}
                  className="flex items-center"
                  onMouseEnter={() => setActiveCountry(country.name)}
                  onMouseLeave={() => setActiveCountry(null)}
                  onClick={() => setActiveCountry(country.name)}
                >
                  <span
                    className={`text-sm cursor-pointer md:text-base lg:text-lg bg-gray-700 rounded-lg px-3 py-2 transition-all duration-300 ${
                      activeCountry === country.name
                        ? "text-white bg-opacity-100"
                        : "bg-opacity-70"
                    }`}
                  >
                    {country.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Power;
