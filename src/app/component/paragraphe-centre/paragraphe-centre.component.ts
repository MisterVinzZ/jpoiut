
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraphe-centre',
  templateUrl: './paragraphe-centre.component.html',
  styleUrls: ['./paragraphe-centre.component.css'],
})
export class ParagrapheCentreComponent {
  @Input() texte: string = '';
}