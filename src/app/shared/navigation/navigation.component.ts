import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';

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

  // * Constructor
  constructor(private dbService: DatabaseService) {}

  // * Methods
  saveDataToDB() {
    this.dbService.saveBooksToDatabase();
  }

  fetchDataFromDB() {
    this.dbService.getBooksFromDatabase();
  }
}
