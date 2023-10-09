import { Component } from '@angular/core';
import { PageNameT } from './shared/navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage: PageNameT = 'bookshelf';
}
