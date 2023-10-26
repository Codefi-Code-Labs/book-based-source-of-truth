import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book/book.model';

export type sortBookFieldT = 'title' | 'author';

@Pipe({
  name: 'sortBooks',
})
export class SortBooksPipe implements PipeTransform {
  transform(arrayOfBooks: Book[], fieldToSortOn: sortBookFieldT): Book[] {
    const sortedArrOfBooks = arrayOfBooks.sort((bookA: Book, bookB: Book) => {
      if (bookA[fieldToSortOn] < bookB[fieldToSortOn]) {
        return -1; // bookA comes before book B
      } else if (bookA[fieldToSortOn] > bookB[fieldToSortOn]) {
        return 1; // bookA comes after book B
      } else {
        return 0; // Keep the same order
      }
    });

    return sortedArrOfBooks;
  }
}
