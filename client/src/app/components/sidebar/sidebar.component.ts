import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Output() openedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  opened: boolean = false;
  icon: string = `../../../assets/icons/x.svg`;

  sidebarOpen: { [key: string]: string } = {
    title: 'TestinGods',
    link1: 'Test unitaire',
    link2: 'Test de test unitaire',
    link3: "Test d'accessibilité",
    link4: 'Test automatisé',
    link5: 'Mixte des sujets',
  };
  sidebar: { [key: string]: string };

  onOpenStart(): void {
    this.icon = `../../../assets/icons/x.svg`;
    this.sidebar = JSON.parse(JSON.stringify(this.sidebarOpen));
    this.openedEvent.emit(true);
  }
  onCloseStart(): void {
    this.icon = `../../../assets/icons/menu.svg`;
    this.sidebar = {};
    this.openedEvent.emit(false);
  }
}
