import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-formation-component6',
  templateUrl: './formation-component6.component.html',
  styleUrls: ['./formation-component6.component.css']
})
export class FormationComponent6Component implements AfterViewInit, OnDestroy {
  private scrollinghorizontal!: HTMLElement;
  private carousel!: HTMLElement;
  private firstCardWidth!: number;
  private arrowBtns!: NodeListOf<HTMLElement>;
  private carouselChildrens!: HTMLElement[];
  private isDragging = false;
  private isAutoPlay = true;
  private startX!: number;
  private startScrollLeft!: number;
  private timeoutId: any;

  ngAfterViewInit(): void {
    this.scrollinghorizontal = document.querySelector(".scrollinghorizontal")!;
    this.carousel = document.querySelector(".carousel")!;
    this.arrowBtns = document.querySelectorAll(".backbtn");

    if (this.carousel) {
      this.firstCardWidth = this.carousel.querySelector<HTMLElement>(".card")!.offsetWidth;
      this.carouselChildrens = Array.from(this.carousel.children) as HTMLElement[];

      // Calcul du nombre de cartes visibles à la fois dans le carrousel
      let cardPerView = Math.round(this.carousel.offsetWidth / this.firstCardWidth);

      // Insérer des copies des dernières cartes au début du carrousel pour le défilement infini
      this.carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        this.carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
      });

      // Insérer des copies des premières cartes à la fin du carrousel pour le défilement infini
      this.carouselChildrens.slice(0, cardPerView).forEach(card => {
        this.carousel.insertAdjacentHTML("beforeend", card.outerHTML);
      });

      // Faire défiler le carrousel à la position appropriée pour masquer les premières cartes dupliquées sur Firefox
      this.carousel.classList.add("no-transition");
      this.carousel.scrollLeft = this.carousel.offsetWidth;
      this.carousel.classList.remove("no-transition");

      // Ajouter des écouteurs d'événements pour les boutons fléchés afin de faire défiler le carrousel à gauche et à droite
      this.arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          if (this.carousel) {
            this.carousel.scrollLeft += btn.id == "left" ? -this.firstCardWidth : this.firstCardWidth;
          }
        });
      });

    }

  }

  ngOnDestroy(): void {
    // Nettoyer les écouteurs d'événements lors de la destruction du composant
    this.removeEventListeners();
  }
  // ... Reste du code ...

  // Fonction de début du glisser-déposer
  private dragStart(e: MouseEvent): void {
    this.isDragging = true;
    if (this.carousel) {
      this.carousel.classList.add("dragging");
    }
    // Enregistre la position initiale du curseur et le défilement du carrousel
    this.startX = e.pageX;
    this.startScrollLeft = this.carousel.scrollLeft;
  }

  // Fonction de glisser-déposer en cours
  private dragging(e: MouseEvent): void {
    if (!this.isDragging || !this.carousel) return; // Si isDragging est faux, sortir de la fonction
    // Met à jour la position de défilement du carrousel en fonction du mouvement du curseur
    this.carousel.scrollLeft = this.startScrollLeft - (e.pageX - this.startX);
  }

  // Fonction de fin du glisser-déposer
  private dragStop(): void {
    this.isDragging = false;
    if (this.carousel) {
      this.carousel.classList.remove("dragging");
    }
  }

// Fonction pour le défilement infini du carrousel
private infiniteScroll(): void {
  if (this.carousel) {
    // Si le carrousel est au début, faire défiler jusqu'à la fin
    if (this.carousel.scrollLeft === 0) {
      this.carousel.classList.add("no-transition");
      this.carousel.scrollLeft = this.carousel.scrollWidth - 2 * this.carousel.offsetWidth;
      this.carousel.classList.remove("no-transition");
    }
    // Si le carrousel est à la fin, faire défiler jusqu'au début
    else if (Math.ceil(this.carousel.scrollLeft) === this.carousel.scrollWidth - this.carousel.offsetWidth) {
      this.carousel.classList.add("no-transition");
      this.carousel.scrollLeft = this.carousel.offsetWidth;
      this.carousel.classList.remove("no-transition");
    }

    // Effacer le délai existant et démarrer le défilement automatique si la souris n'est pas en train de survoler le carrousel
    clearTimeout(this.timeoutId);
    if (!this.scrollinghorizontal.matches(":hover")) {
      this.autoPlay();
    }
  }
}

 // Fonction de défilement automatique
 private autoPlay(): void {
  if (window.innerWidth < 800 || !this.isAutoPlay) return; // Sortir si la fenêtre est inférieure à 800 pixels ou si isAutoPlay est faux
  // Faire défiler automatiquement le carrousel toutes les 2500 ms
  this.timeoutId = setTimeout(() => {
    if (this.carousel) {
      this.carousel.scrollLeft += this.firstCardWidth;
    }
  }, 2500);
}

  // Ajout des écouteurs d'événements pour le glisser-déposer, le défilement automatique et les événements liés à la souris
  private addEventListeners(): void {
    if (this.carousel) {
      this.carousel.addEventListener("mousedown", (e) => this.dragStart(e));
      this.carousel.addEventListener("mousemove", (e) => this.dragging(e));
      document.addEventListener("mouseup", () => this.dragStop());
      this.carousel.addEventListener("scroll", () => this.infiniteScroll());
    }

    if (this.scrollinghorizontal) {
      this.scrollinghorizontal.addEventListener("mouseenter", () => clearTimeout(this.timeoutId));
      this.scrollinghorizontal.addEventListener("mouseleave", () => this.autoPlay());
    }
  }

    // Suppression des écouteurs d'événements
    private removeEventListeners(): void {
      if (this.carousel) {
        this.carousel.removeEventListener("mousedown", (e) => this.dragStart(e));
        this.carousel.removeEventListener("mousemove", (e) => this.dragging(e));
        document.removeEventListener("mouseup", () => this.dragStop());
        this.carousel.removeEventListener("scroll", () => this.infiniteScroll());
      }
  
      if (this.scrollinghorizontal) {
        this.scrollinghorizontal.removeEventListener("mouseenter", () => clearTimeout(this.timeoutId));
        this.scrollinghorizontal.removeEventListener("mouseleave", () => this.autoPlay());
      }
    }
}
