(function() {
  'use strict';

  angular.module('threeApp').controller('MainCtrl', function($scope) {
    var animate, camera, geometry, material, mesh, renderer, scene;
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;
    scene = new THREE.Scene();
    geometry = new THREE.CubeGeometry(200, 200, 200);
    material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true
    });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    renderer = new THREE.CanvasRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    animate = function() {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;
      return renderer.render(scene, camera);
    };
    return animate();
  });

}).call(this);
