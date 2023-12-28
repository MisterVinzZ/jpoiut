import { Component } from '@angular/core';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent {
  displayStatistics = false;
  displayConfiguration = true;

  showStatistics() {
    this.displayStatistics = true;
    this.displayConfiguration = false;
  }

  showConfiguration() {
    this.displayStatistics = false;
    this.displayConfiguration = true;
  }

}
