import { Component } from '@angular/core';
import { Book } from '../shared/book/book.model';

@Component({
  selector: 'app-bookshelf-page',
  templateUrl: './bookshelf-page.component.html',
  styleUrls: ['./bookshelf-page.component.css'],
})
export class BookshelfPageComponent {
  selectedBook: Book;
}
