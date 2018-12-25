import { Component } from '@angular/core';
import { trigger } from '@angular/animations';
import { fadeIn } from './fade-animations/fade-animations.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // trigger('fadeOut', fadeOut()),
    trigger('fadeIn', fadeIn())
  ]
})
export class AppComponent {

  public users = ['Peter', 'Akhil', 'Max'];

  title = 'angular-animations';
}
