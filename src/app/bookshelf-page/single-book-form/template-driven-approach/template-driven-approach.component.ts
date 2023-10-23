import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-template-driven-approach',
  templateUrl: './template-driven-approach.component.html',
  styleUrls: ['./template-driven-approach.component.css'],
})
export class TemplateDrivenApproachComponent {
  // * Properties
  isFormSubmitted: boolean = false;
  bookDetails: Partial<Book> = {
    title: '',
    author: '',
    coverImg: '',
  };

  // * Methods
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

    formObject.reset(); // Reset the form

    // TODO: Remove this timeout
    setTimeout(() => {
      this.isFormSubmitted = false; // Hide the results
    }, 3000);
  }
}
