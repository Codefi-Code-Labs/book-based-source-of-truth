import { Component, EventEmitter, Output } from '@angular/core';

export type PageNameT = 'bookshelf' | 'library';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  // * Properties
  collapsed: boolean = true;
  show: boolean = false;
}
