import * as THREE from "three";
import "./style.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

/**
 * Base
 */
// Canvas

const canvas = document.querySelector("canvas.webgl");

// Sizes
const sizes = {
  width: 800,
  height: 800,
};

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(mesh);

// Camera
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
);

camera.position.z = -5;
camera.lookAt(mesh.position);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

let cursorX;
let cursorY;

window.addEventListener("mousemove", (e) => {
  cursorX = e.clientX / sizes.width - 0.5; // -0.5 ~ 0.5 사이의 값을 viewport에서 가짐
  cursorY = e.clientY / sizes.height - 0.5;
});

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const tick = () => {
  // Render
  renderer.render(scene, camera);
  controls.update();
  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
