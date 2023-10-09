import { Component, Input } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-single-book-details',
  templateUrl: './single-book-details.component.html',
  styleUrls: ['./single-book-details.component.css'],
})
export class SingleBookDetailsComponent {
  // * Properties
  @Input() bookDetails: Book;
}
