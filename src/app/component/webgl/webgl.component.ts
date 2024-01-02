import { Component, ElementRef, NgZone, OnInit, Renderer2 } from '@angular/core';
import * as THREE from 'three';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-webgl',
  templateUrl: './webgl.component.html',
  styleUrls: ['./webgl.component.css']
})
export class WebglComponent  implements OnInit {

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;

  constructor(private ngZone: NgZone, private renderer2: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.init();
    this.animate();
  }

  private init() {
    const fg = this.el.nativeElement.querySelector('#area');

    // Créez et configurez le moteur de rendu
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0x777777);
    this.renderer.setSize(fg.offsetWidth, fg.offsetHeight);
    this.renderer2.appendChild(fg, this.renderer.domElement);

    // Créez une nouvelle scène
    this.scene = new THREE.Scene();

    // Créez et configurez la caméra
    this.camera = new THREE.PerspectiveCamera(75, fg.offsetWidth / fg.offsetHeight, 0.1, 10000);
    this.camera.position.z = 500;

    // Utilisez la variable locale 'scene' au lieu de déclarer une nouvelle variable
    const scene = this.scene;

    // Chargez le modèle avec le ColladaLoader
    const loader = new ColladaLoader();
    loader.load(
      '../../assets/objets3d/ecran.dae',
      (collada) => {
        const dae = collada.scene;
    
        // Ajustez la position et l'échelle du modèle
        dae.position.set(0, 0, 0);
        dae.position.divideScalar(2);
        dae.scale.set(50, 50, 50);
        dae.updateMatrix();
    
        // Ajoutez le modèle à la scène
        this.scene.add(dae);
      },
      undefined,
      (error) => {
        console.error('Error loading Collada model:', error);
      }
    );

    // Ajoutez une lumière directionnelle à la scène
    const light = new THREE.DirectionalLight(0xffffff, 10);
    light.position.set(0, 0, 200);
    this.scene.add(light);

    const light2 = new THREE.DirectionalLight(0xffffff, 10);
    light2.position.set(0, 0, -200);
    this.scene.add(light2);


    const light3 = new THREE.DirectionalLight(0xffffff, 1);
    light3.position.set(-200, 0, 0);
    this.scene.add(light3);

    const light4 = new THREE.DirectionalLight(0xffffff, 1);
    light4.position.set(200, 0, 0);
    this.scene.add(light4);
    // Créez et configurez les contrôles OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(10, 10, 0);
  }

  private animate() {
    // Utilisez ngZone.runOutsideAngular pour optimiser les performances
    this.ngZone.runOutsideAngular(() => {
      const animateFn = () => {
        requestAnimationFrame(animateFn);
        this.renderer.render(this.scene, this.camera);
        this.controls.update();
      };
      animateFn();
    });
  }
}
