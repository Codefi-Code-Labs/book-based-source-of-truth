import { Injectable } from '@angular/core';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  // * Properties
  apiBookResults: Book[] = [
    new Book(
      'Pride and Prejudice',
      'Jane Austen',
      'https://source.unsplash.com/150x150/?romance'
    ),
    new Book(
      'Moby-Dick',
      'Herman Melville',
      'https://source.unsplash.com/150x150/?whale'
    ),
    new Book(
      'Brave New World',
      'Aldous Huxley',
      'https://source.unsplash.com/150x150/?brave-new-world'
    ),
  ];

  // * Constructor
  constructor() {}

  // * Methods
  // READ ALL - Get all books from the library
  getAPIBooks() {
    return this.apiBookResults.slice();
  }
}
