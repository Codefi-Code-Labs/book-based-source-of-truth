import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../../shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';
import { Router } from '@angular/router';

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
  constructor(
    public bookshelfService: BookshelfService,
    private router: Router
  ) {}

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

  // * Methods
  onRemoveBook(bookId: number) {
    this.bookshelfService.deleteBookById(bookId);
    this.router.navigate(['bookshelf']);
  }

  navigateToNewBookRoute() {
    this.router.navigate(['bookshelf', 'new']);
  }
}
