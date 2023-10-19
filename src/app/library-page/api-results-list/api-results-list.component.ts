import { Component } from '@angular/core';
import { Book } from '../../shared/book/book.model';
import { LibraryService } from '../library.service';
import { BookshelfService } from 'src/app/bookshelf-page/bookshelf.service';

@Component({
  selector: 'app-api-results-list',
  templateUrl: './api-results-list.component.html',
  styleUrls: ['./api-results-list.component.css'],
})
export class ApiResultsListComponent {
  // * Properties
  apiBookResults: Book[] = [];

  // * Constructor
  constructor(
    private libraryService: LibraryService,
    private bookshelfService: BookshelfService
  ) {}

  // * Lifecycle
  ngOnInit() {
    // Set the initial list of books
    this.apiBookResults = this.libraryService.getAPIBooks();
  }

  // * Methods
  onSaveBook(book: Book) {
    this.bookshelfService.addBook(book);
    this.libraryService.setAddBookNotification(book);
  }
}
