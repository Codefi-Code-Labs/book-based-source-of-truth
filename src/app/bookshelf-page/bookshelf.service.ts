import { Injectable } from '@angular/core';
import { Book } from '../shared/book/book.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookshelfService {
  // * Properties
  private mySavedBooks: Book[] = [
    new Book(
      123,
      '1984',
      'George Orwell',
      'https://source.unsplash.com/150x150/?1984'
    ),
    new Book(
      456,
      'To Kill a Mockingbird',
      'Harper Lee',
      'https://source.unsplash.com/150x150/?mockingbird'
    ),
    new Book(
      789,
      'The Great Gatsby',
      'F. Scott Fitzgerald',
      'https://source.unsplash.com/150x150/?gatsby'
    ),
  ];

  // * Events
  bookListChanged = new Subject<Book[]>();

  // * Constructor
  constructor() {}

  // * Methods
  // READ ALL - get all books
  getSavedBooks() {
    return this.mySavedBooks.slice();
  }

  // READ ONE - get one book
  getBookById(id: number) {
    const foundBook = this.mySavedBooks.find((book) => book.id === id);

    return foundBook;
  }

  // CREATE - add a new book
  addBook(newBook: Book) {
    this.mySavedBooks.push(newBook); // push() adds one or more elements to the end of an array and returns the new length of the array
    this.bookListChanged.next(this.mySavedBooks.slice()); // next the updated list of books
  }

  // UPDATE - update an existing book
  updateBook(bookId: number, updatedBookVals: Partial<Book>) {
    const bookIndex = this.mySavedBooks.findIndex((book) => book.id === bookId); // Get index of book to update

    if (bookIndex !== -1) {
      // We found the book, now we update it with new values
      this.mySavedBooks[bookIndex] = {
        ...this.mySavedBooks[bookIndex], // Spread operator to get all the existing values
        ...updatedBookVals, // Spread operator to get all the updated values
        id: bookId, // Ensure the book ID stays the same
      };

      this.bookListChanged.next(this.mySavedBooks.slice());
    } else {
      // Book wasn't found
      console.error('Book not found!');
    }
  }

  // DELETE - delete an existing book
  deleteBookById(id: number) {
    const newBooks = this.mySavedBooks.filter((book) => book.id !== id);

    console.log('newBooks:', newBooks);
    this.mySavedBooks = newBooks;
    this.bookListChanged.next(this.mySavedBooks.slice());
  }
}
