import { Component } from '@angular/core';
import { Book } from '../../shared/book/book.model';

@Component({
  selector: 'app-api-results-list',
  templateUrl: './api-results-list.component.html',
  styleUrls: ['./api-results-list.component.css'],
})
export class ApiResultsListComponent {
  apiBookResults: Book[] = [
    new Book(
      'Pride and Prejudice',
      'Jane Austen',
      'https://source.unsplash.com/150x150/?romance'
    ),
    new Book(
      'Moby-Dick',
      'Herman Melville',
      'https://source.unsplash.com/150x150/?whale'
    ),
    new Book(
      'Brave New World',
      'Aldous Huxley',
      'https://source.unsplash.com/150x150/?brave-new-world'
    ),
  ];
}
