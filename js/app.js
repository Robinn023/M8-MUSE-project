import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const container = document.getElementById('container');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 30); 
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 20); 
directionalLight.position.set(0, 10, 7.5); 
scene.add(directionalLight);

camera.position.z = 150; // Hier kan je de afstand mee aanpassen tussen het model en de camera


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; 
controls.dampingFactor = 0.25; 
controls.enableZoom = true; 

const loader = new GLTFLoader();
loader.load('../3dmodel/test_try_3d.glb', function (gltf) {
    const model = gltf.scene;
    scene.add(model);

    model.scale.set(5, 5, 5);
    model.position.y = -100;
    model.position.x = -0;
    model.position.z = -0;


    function animate() {
        requestAnimationFrame(animate);

        controls.update(); 

        renderer.render(scene, camera);
    }

    animate();

}, undefined, function (error) {
    console.error(error);
});

window.addEventListener('resize', function () {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});

/*npx vite

Run code voor de terminal

*/
