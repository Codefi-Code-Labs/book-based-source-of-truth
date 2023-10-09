import { Component } from '@angular/core';
import { Book } from '../shared/book/book.model';
import { BookshelfService } from './bookshelf.service';

@Component({
  selector: 'app-bookshelf-page',
  templateUrl: './bookshelf-page.component.html',
  styleUrls: ['./bookshelf-page.component.css'],
})
export class BookshelfPageComponent {
  // * Properties
  selectedBook: Book;

  // * Constructor
  constructor(private bookshelfService: BookshelfService) {}

  // * Lifecycle
  ngOnInit(): void {
    // Subscribe to the selectedBook event
    this.bookshelfService.selectedBook.subscribe((book: Book) => {
      this.selectedBook = book;
    });
  }

  // * Methods
}
