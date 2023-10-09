import { Component } from '@angular/core';
import { Book } from '../../shared/book/book.model';

@Component({
  selector: 'app-saved-book-list',
  templateUrl: './saved-book-list.component.html',
  styleUrls: ['./saved-book-list.component.css'],
})
export class SavedBookListComponent {
  mySavedBooks: Book[] = [
    new Book(
      '1984',
      'George Orwell',
      'https://source.unsplash.com/150x150/?1984'
    ),
    new Book(
      'To Kill a Mockingbird',
      'Harper Lee',
      'https://source.unsplash.com/150x150/?mockingbird'
    ),
    new Book(
      'The Great Gatsby',
      'F. Scott Fitzgerald',
      'https://source.unsplash.com/150x150/?gatsby'
    ),
  ];
}
