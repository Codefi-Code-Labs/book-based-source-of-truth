import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  // * Properties
  @Input() book: Book;
  @Output() bookSelected = new EventEmitter<Book>();

  // * Constructor

  // * Methods
}
