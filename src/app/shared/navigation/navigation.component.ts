import { Component, EventEmitter, Output } from '@angular/core';

export type PageNameT = 'bookshelf' | 'library';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  // * Emitters
  @Output() selectedPage = new EventEmitter<PageNameT>();

  // * Properties
  collapsed: boolean = true;
  show: boolean = false;

  // * Methods
  onSelectPage(pageName: PageNameT) {
    this.selectedPage.emit(pageName);
  }
}
