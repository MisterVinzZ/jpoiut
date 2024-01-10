// visite-virtuelle.component.ts
import { Component, OnInit } from '@angular/core';
import { UnityLoaderService } from 'src/app/unity-loader.service'; 

@Component({
  selector: 'app-webgl',
  templateUrl: './webgl.component.html',
  styleUrls: ['./webgl.component.css']
})
export class WebglComponent implements OnInit {

  constructor(private unityLoaderService: UnityLoaderService) { }

  ngOnInit(): void {
    this.unityLoaderService.loadScript('../../../assets/Build/webgl.loader.js', 'unity-loader-script')
      .then(() => this.initializeUnity())
      .catch(error => console.error('Unity Loader script failed to load', error));
  }

  initializeUnity(): void {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {

    }

    (window as any).createUnityInstance(document.querySelector("#unity-canvas"), {
      dataUrl: "../../../assets/Build/webgl.data",
      frameworkUrl: "../../../assets/Build/webgl.framework.js",
      codeUrl: "../../../assets/Build/webgl.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "biloucorps",
      productName: "Room_133",
      productVersion: "0.1.0",
    }).then((unityInstance: any) => {
      console.log('Unity instance loaded');
    }).catch((error: any) => {
      console.error('Error loading Unity', error);
    });
  }
}
