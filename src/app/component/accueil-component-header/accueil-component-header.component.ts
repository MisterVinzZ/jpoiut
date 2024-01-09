import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil-component-header',
  templateUrl: './accueil-component-header.component.html',
  styleUrls: ['./accueil-component-header.component.css'],
  template: `
  <div id="countdown">
    <div class='container'>
      <span class='value'>{{ days }}</span>
      <span class='label'>Jours</span>
    </div>
    <div class='container'>
      <span class='value'>{{ hours }}</span>
      <span class='label'>Heures</span>
    </div>
    <div class='container'>
      <span class='value'>{{ minutes }}</span>
      <span class='label'>Minutes</span>
    </div>
    <div class='container'>
      <span class='value'>{{ seconds }}</span>
      <span class='label'>Secondes</span>
    </div>
  </div>
`,
styles: []
})
export class AccueilComponentHeaderComponent implements OnInit{




  
  private lastDate: number = new Date("Janvier 11, 2024 00:00:00").getTime();
  public days: number = 0;
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;
  public countdownMessage: string = '';

  ngOnInit(): void {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.lastDate - now;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(intervalId);
        this.countdownMessage = 'Terminé !';
      }
    }, 1000);
  }
}
