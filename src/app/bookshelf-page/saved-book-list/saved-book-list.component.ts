import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../../shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-saved-book-list',
  templateUrl: './saved-book-list.component.html',
  styleUrls: ['./saved-book-list.component.css'],
})
export class SavedBookListComponent {
  // * Properties
  @Output() bookSelected = new EventEmitter<Book>();
  mySavedBooks: Book[] = [];

  // * Constructor
  constructor(public bookshelfService: BookshelfService) {}

  // * Lifecycle
  ngOnInit() {
    // Set the initial list of books
    this.mySavedBooks = this.bookshelfService.getSavedBooks();

    // Subscribe to the bookListChanged event
    this.bookshelfService.bookListChanged.subscribe(
      (updatedBookList: Book[]) => {
        this.mySavedBooks = updatedBookList;
      }
    );
  }
}
