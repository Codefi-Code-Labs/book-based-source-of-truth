import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BookshelfPageComponent } from './bookshelf-page.component';
import { SavedBookListComponent } from './saved-book-list/saved-book-list.component';
import { SingleBookDetailsComponent } from './single-book-details/single-book-details.component';
import { SingleBookFormComponent } from './single-book-form/single-book-form.component';
import { BookshelfRoutingModule } from './bookshelf-routing.module';

@NgModule({
  declarations: [
    // Compoenents
    BookshelfPageComponent,
    SavedBookListComponent,
    SingleBookDetailsComponent,
    SingleBookFormComponent,
  ],
  imports: [SharedModule, BookshelfRoutingModule],
})
export class BookshelfModule {}
