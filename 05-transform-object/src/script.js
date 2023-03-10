import * as THREE from "three";
import "./style.css";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0.7;
mesh.position.y = 0.6;
mesh.position.z = -5;
mesh.position.set(3, 3, -3);

scene.add(mesh);

scene.add(new THREE.AxesHelper());
/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.set(3, 3, 7);
scene.add(camera);

console.log(mesh.position.distanceTo(camera.position));
// make mesh position vector length to be 1
mesh.position.normalize();

mesh.scale.set(1, 2, 0.5);
mesh.rotation.y = Math.PI * 0.25;
mesh.rotation.x = Math.PI * 0.12;
mesh.rotation.reorder("YXZ");

camera.lookAt(mesh.position);

const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }) 
)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x00ff00 }) 
)
group.add(cube1, cube2);

group.scale.y = 2;
/**
 * 
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
