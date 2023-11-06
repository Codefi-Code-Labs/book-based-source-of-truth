import { Component } from '@angular/core';
import { DatabaseService } from '../db/database.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

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
  isAuth: boolean = false;
  currUserSub: Subscription;

  // * Constructor
  constructor(
    private dbService: DatabaseService,
    private authService: AuthService
  ) {}

  // * Lifecycle
  ngOnInit() {
    this.currUserSub = this.authService.currUser.subscribe((user) => {
      this.isAuth = !!user;
    });
  }

  ngOnDestroy() {
    this.currUserSub.unsubscribe();
  }

  // * Methods
  saveDataToDB() {
    this.dbService.saveBooksToDatabase();
  }

  fetchDataFromDB() {
    this.dbService.getBooksFromDatabase();
  }

  handleSignOut() {
    this.authService.signOut();
  }
}
