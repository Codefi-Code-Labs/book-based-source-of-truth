import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css'],
})
export class ReactiveApproachComponent {
  // * Properties
  isFormSubmitted: boolean = false;
  bookDetails: FormGroup = new FormGroup<{
    title: FormControl<string>;
    author: FormControl<string>;
    coverImg: FormControl<string>;
  }>({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    coverImg: new FormControl('', Validators.required),
  });

  // * Methods
  onFormSubmit() {
    // If the form is invalid, don't submit it
    if (this.bookDetails.invalid) return;

    this.isFormSubmitted = true; // Show the results

    // TODO: Remove this timeout
    setTimeout(() => {
      this.bookDetails.reset(); // Reset the form
      this.isFormSubmitted = false; // Hide the results
    }, 3000);
  }
}
