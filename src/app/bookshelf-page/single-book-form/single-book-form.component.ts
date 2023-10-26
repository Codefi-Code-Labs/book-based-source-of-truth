import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-single-book-form',
  templateUrl: './single-book-form.component.html',
  styleUrls: ['./single-book-form.component.css'],
})
export class SingleBookFormComponent {
  // * Properties
  isEditingBook: boolean = false;
  isFormSubmitted: boolean = false;
  bookId: number | null = null;
  bookDetails: Partial<Book> = {
    title: '',
    author: '',
    coverImg: '',
  };

  // * Constructor
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookshelfService: BookshelfService
  ) {}

  // * Lifecycle
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.bookId = +params['id']; // The + converts the string to a number

      this.isEditingBook = !!this.bookId; // If there is a bookId, then we are editing a book

      // If we are editing a book, get the book and update local variable
      if (this.isEditingBook) {
        const editingBook = this.bookshelfService.getBookById(this.bookId);

        if (editingBook) {
          this.bookDetails = {
            title: editingBook.title,
            author: editingBook.author,
            coverImg: editingBook.coverImg,
          };
        }
      }
    });
  }

  // * Methods
  // Form Submit Handler
  onFormSubmit(formObject: NgForm) {
    // If the form is invalid, don't submit it
    if (formObject.invalid) return;

    this.isFormSubmitted = true; // Show the results

    // Set the book details
    this.bookDetails = {
      title: formObject.value.title,
      author: formObject.value.author,
      coverImg: formObject.value.coverImg,
    };

    // Perform different actions depending on "edit" or "create"
    if (this.isEditingBook) {
      // Update the book
      this.bookshelfService.updateBook(this.bookId, this.bookDetails);
    } else {
      // Create the book
      const newBook: Book = {
        id: +(Math.random() * 1000000).toFixed(0),
        title: this.bookDetails.title,
        author: this.bookDetails.author,
        coverImg: this.bookDetails.coverImg,
      };

      this.bookshelfService.addBook(newBook);
    }

    this.onResetForm(formObject);
  }

  // Reset Form Handler
  onResetForm(formObject?: NgForm) {
    formObject && formObject.reset(); // Reset the form

    this.isFormSubmitted = false; // Hide the results

    this.router.navigate(['../'], { relativeTo: this.route }); // Navigate back one level
  }
}
