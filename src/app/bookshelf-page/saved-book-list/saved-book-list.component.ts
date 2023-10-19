import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Book } from '../../shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-saved-book-list',
  templateUrl: './saved-book-list.component.html',
  styleUrls: ['./saved-book-list.component.css'],
})
export class SavedBookListComponent implements OnInit, OnDestroy {
  // * Properties
  @Output() bookSelected = new EventEmitter<Book>();
  mySavedBooks: Book[] = [];
  mySavedBooksSub: Subscription;

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
    this.mySavedBooksSub = this.bookshelfService.bookListChanged.subscribe(
      (updatedBookList: Book[]) => {
        this.mySavedBooks = updatedBookList;
      }
    );
  }

  ngOnDestroy() {
    // Unsubscribe from the bookListChanged event
    this.mySavedBooksSub.unsubscribe();
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
