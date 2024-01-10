import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnityLoaderService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  loadScript(url: string, id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`#${id}`)) {
        resolve();
        return;
      }
      const script = this.renderer.createElement('script');
      script.id = id;
      script.type = 'text/javascript';
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      this.renderer.appendChild(document.body, script);
    });
  }
}