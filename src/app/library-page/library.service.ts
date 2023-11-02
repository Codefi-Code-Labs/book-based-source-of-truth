import { Injectable } from '@angular/core';
import { Book } from '../shared/book/book.model';
import { Subject } from 'rxjs';
import { searchResDocsT } from './api-search/api-search.component';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  // * Events/Subjects
  addBookNotification = new Subject<Book>();
  apiBookListSubject = new Subject<Book[]>();

  // * Properties
  apiBookResults: Book[] = [];

  // * Constructor
  constructor() {}

  // * Methods
  // READ ALL - Get all books from the library
  getAPIBooks() {
    return this.apiBookResults.slice();
  }

  setAddBookNotification(book: Book) {
    this.addBookNotification.next(book);
  }

  saveApiBookResults(apiResBooks: searchResDocsT[]) {
    apiResBooks.forEach((book) => {
      // Destructure Book
      const { title, author_name } = book;

      if (!title || !author_name[0]) return;

      // Get Image Path
      const coverImg =
        'https://source.unsplash.com/150x150/?' +
        title.split(' ').join('-').toLowerCase();

      // Generate Random Id
      const randomId = +(Math.random() * 1000000).toFixed(0);

      // For each Book -> Create a book that fits our internal model
      const newBook = new Book(randomId, title, author_name[0], coverImg);

      // Push new book to Library Results Array
      this.apiBookResults.push(newBook);
    });

    // Emit the new book list
    this.apiBookListSubject.next(this.apiBookResults.slice());
  }
}
