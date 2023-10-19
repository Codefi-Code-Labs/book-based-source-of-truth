import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { LibraryService } from '../library.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-book-notification',
  templateUrl: './add-book-notification.component.html',
  styleUrls: ['./add-book-notification.component.css'],
})
export class AddBookNotificationComponent implements OnInit, OnDestroy {
  // * Properties
  newlySavedBook: Book;
  newlySavedBookSub: Subscription;

  // * Constructor
  constructor(private libraryService: LibraryService, private router: Router) {}

  // * Lifecycle
  ngOnInit() {
    // Subscribe to the addBookNotification Subject
    this.newlySavedBookSub = this.libraryService.addBookNotification.subscribe(
      (book: Book) => {
        this.newlySavedBook = book;

        // Dismiss the notification after 3 seconds
        setTimeout(() => {
          this.dismissNotification();
        }, 3000);
      }
    );
  }

  ngOnDestroy() {
    this.newlySavedBookSub.unsubscribe();
  }

  // * Methods
  dismissNotification() {
    this.newlySavedBook = null;
  }

  navigateToBook() {
    this.router.navigate(['/bookshelf', this.newlySavedBook.id]);
  }
}
