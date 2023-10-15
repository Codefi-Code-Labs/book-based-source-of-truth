import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-single-book-form',
  templateUrl: './single-book-form.component.html',
  styleUrls: ['./single-book-form.component.css'],
})
export class SingleBookFormComponent {
  // * Properties
  isEditingBook: boolean = false;

  // * Constructor
  constructor(private route: ActivatedRoute) {}

  // * Lifecycle
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const bookId = +params['id'];

      this.isEditingBook = !!bookId;
    });
  }
}
