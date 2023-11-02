import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Book } from '../shared/book/book.model';
import { BookshelfService } from './bookshelf.service';
import { DatabaseService } from '../shared/services/database.service';

export const bookResolver: ResolveFn<Book[]> = () => {
  const books = inject(BookshelfService).getSavedBooks();

  if (books?.length === 0) {
    return inject(DatabaseService).getBooksFromDatabase() || [];
  } else {
    return books;
  }
};
