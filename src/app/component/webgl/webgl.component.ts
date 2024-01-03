import { Component, ElementRef, NgZone, OnInit, Renderer2 } from '@angular/core';
import * as THREE from 'three';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-webgl',
  templateUrl: './webgl.component.html',
  styleUrls: ['./webgl.component.css']
})
export class WebglComponent implements OnInit {

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;
  private zoomedIn: boolean = false;
  private zoomFactor: number = 2; 
  private initialCylinderPosition: THREE.Vector3 = new THREE.Vector3();
  private backgroundMaterial!: THREE.MeshBasicMaterial;
  constructor(private ngZone: NgZone, private renderer2: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.init();
    this.animate();
  }

  private init() {
    const fg = this.el.nativeElement.querySelector('#area');

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0xffffff); // Fond blanc
   
    this.renderer.setSize(fg.offsetWidth, fg.offsetHeight);
    this.renderer2.appendChild(fg, this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x777777);


    this.camera = new THREE.PerspectiveCamera(75, fg.offsetWidth / fg.offsetHeight, 0.1, 10000);
    this.camera.position.z = 500;

    this.backgroundMaterial = new THREE.MeshBasicMaterial({
      side: THREE.BackSide,
      color: 0x777777,  // Couleur du fond si l'image n'est pas chargée
    });
    const loader = new ColladaLoader();
    loader.load(
      '../../assets/objets3d/ecran.dae',
      (collada) => {
        const dae = collada.scene;

        dae.position.set(0, 0, 0);
        dae.position.divideScalar(2);
        dae.scale.set(50, 50, 50);
        dae.position.y = -150;
        dae.updateMatrix();

        this.scene.add(dae);

        const backgroundGeometry = new THREE.BoxGeometry(10000, 10000, 10000);
        this.backgroundMaterial = new THREE.MeshBasicMaterial({
          side: THREE.BackSide,
          color: 0x777777,  // Couleur du fond si l'image n'est pas chargée
        });
        const backgroundMesh = new THREE.Mesh(backgroundGeometry, this.backgroundMaterial);
        backgroundMesh.name = 'backgroundMaterialName';
        this.scene.add(backgroundMesh);

        const buttonObject = this.findButtonObject(dae);
    if (buttonObject && buttonObject instanceof THREE.Mesh) {
      // Enregistrez la position initiale du cylindre
      this.initialCylinderPosition.copy(buttonObject.position);

      // Ajoutez un matériau de base au cylindre s'il n'a pas de matériau défini
      if (!buttonObject.material) {
        buttonObject.material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Couleur par défaut
      }
    }
      },

      undefined,
      (error) => {
        console.error('Error loading Collada model:', error);
      }

    );

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

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(10, 10, 0);

    window.addEventListener('mousedown', (event: MouseEvent) => {
      this.onMouseDown(event);
    });

  }

  private findButtonObject(parentObject: THREE.Object3D): THREE.Object3D | null {
    console.log('Searching for button in:', parentObject);

    function recursiveSearch(obj: THREE.Object3D): THREE.Object3D | null {
      console.log('Checking object:', obj.name);

      if (obj.name === 'Cylinder') {
        console.log('Button (Cylinder) found!');
        return obj;
      } else {
        for (const child of obj.children) {
          const result = recursiveSearch(child);
          if (result) {
            return result;
          }
        }
        return null;
      }
    }

    return recursiveSearch(parentObject);
  }

  private onMouseDown(event: MouseEvent) {
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    console.log('Mouse Click Coordinates:', mouseX, mouseY);
  
    const intersects = this.getIntersectedObjects(event);
  
    if (intersects.length > 0) {
      const clickedObject = intersects[0].object;
      console.log('Object clicked:', clickedObject.name);
      this.performActionOnClick(clickedObject);
    }
  }

  private performActionOnClick(clickedObject: THREE.Object3D) {
    if (clickedObject.name === 'Cylinder') {
      console.log('Changement de couleur de fond pour un clic sur le cylindre');
  
      // Toggle le zoom
      this.zoomedIn = !this.zoomedIn;
  
      if (this.zoomedIn) {
        // Si zoomé, utilisez le facteur de zoom
        this.camera.zoom = this.zoomFactor;
        this.backgroundMaterial.color = new THREE.Color(0x333333); // Changez la couleur du fond lors du zoom
  
        // Ajoutez une petite animation de translation au cylindre
        this.translateCylinder(clickedObject, 0.03); // Ajustez la distance de translation selon vos besoins
      } else {
        // Sinon, réinitialisez le zoom à 1
        this.camera.zoom = 1;
        this.backgroundMaterial.color = new THREE.Color(0x777777); // Revert to la couleur du fond d'origine
  
        // Réinitialisez la position du cylindre à sa position initiale
        clickedObject.position.copy(this.initialCylinderPosition);
      }
  
      // Assurez-vous de mettre à jour le rendu après avoir modifié la propriété de zoom
      this.camera.updateProjectionMatrix();
      this.renderer.render(this.scene, this.camera);
    }
  }
  
  private translateCylinder(cylinder: THREE.Object3D, distance: number) {
    const axis = new THREE.Vector3(0, 0, 1); // Axe z pour la translation avant/arrière
    const amount = distance;
  
    this.ngZone.runOutsideAngular(() => {
      const translateFn = () => {
        const t = performance.now() * 0.001; // Utilisez le temps pour créer une animation fluide
        const delta = Math.sin(t) * 0.01; // Ajustez la vitesse et l'amplitude selon vos besoins
  
        cylinder.translateOnAxis(axis, delta * amount);
  
        requestAnimationFrame(translateFn);
      };
      translateFn();
    });
  }
  

  private getIntersectedObjects(event: MouseEvent): THREE.Intersection[] {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, this.camera);

    return raycaster.intersectObjects(this.scene.children, true);
  }

  
  
  
  private animate() {
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
