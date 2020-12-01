import { Component } from '@angular/core';
import { tsOptions } from './tsParticles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  particlesOptions = tsOptions;
  opened: boolean;

  openedEvent(event: boolean): void {
    this.opened = event;
  }
}
