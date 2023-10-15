import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-single-book-details',
  templateUrl: './single-book-details.component.html',
  styleUrls: ['./single-book-details.component.css'],
})
export class SingleBookDetailsComponent {
  // * Properties
  bookDetails: Book;

  // * Constructor
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookshelfService: BookshelfService
  ) {}

  // * Lifecycle
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const bookIdFromParams = +params['id'];
      this.bookDetails = this.bookshelfService.getBookById(bookIdFromParams);
    });
  }

  // * Methods
  navigateToEditBookRoute() {
    this.router.navigate(['../', this.bookDetails.id, 'edit'], {
      relativeTo: this.route,
    });
  }

  onRemoveBook() {
    this.bookshelfService.deleteBookById(this.bookDetails.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
