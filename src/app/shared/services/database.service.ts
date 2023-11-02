import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookshelfService } from 'src/app/bookshelf-page/bookshelf.service';
import { Book } from '../book/book.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  // * Properties
  readonly firebaseRootURL =
    'https://cape-source-of-truth-2023-default-rtdb.firebaseio.com/books.json';

  // * Constructor
  constructor(
    private http: HttpClient,
    private bookshelfService: BookshelfService
  ) {}

  // * Methods
  saveBooksToDatabase() {
    const myBooks = this.bookshelfService.getSavedBooks();

    this.http.put(this.firebaseRootURL, myBooks).subscribe();
  }

  getBooksFromDatabase() {
    const myDBBooks = this.http.get<Book[]>(this.firebaseRootURL).pipe(
      tap((books: Book[]) => {
        this.bookshelfService.setBooks(books);
      })
    );

    return myDBBooks;
  }
}
