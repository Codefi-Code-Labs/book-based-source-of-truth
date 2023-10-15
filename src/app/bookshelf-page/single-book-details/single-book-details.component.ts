import { Component, Input } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-single-book-details',
  templateUrl: './single-book-details.component.html',
  styleUrls: ['./single-book-details.component.css'],
})
export class SingleBookDetailsComponent {
  // * Properties
  @Input() bookDetails: Book;

  // * Constructor
  constructor(private bookshelfService: BookshelfService) {}

  // * Lifecycle

  // * Methods
  onUpdateBook() {
    // TODO: Route to '/bookshelf/:id/edit
  }

  onRemoveBook() {
    this.bookshelfService.deleteBookById(this.bookDetails.id);

    // TODO: Route to '/bookshelf'
  }
}
