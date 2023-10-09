import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './book.model';
import { BookshelfService } from 'src/app/bookshelf-page/bookshelf.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  // * Properties
  @Input() book: Book;

  // * Constructor
  constructor(private bookshelfService: BookshelfService) {}

  // * Methods
  onBookSelected() {
    this.bookshelfService.selectedBook.emit(this.book);
  }
}
