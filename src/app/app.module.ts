import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookshelfPageComponent } from './bookshelf-page/bookshelf-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { BookComponent } from './shared/book/book.component';
import { ApiResultsListComponent } from './library-page/api-results-list/api-results-list.component';
import { ApiSearchComponent } from './library-page/api-search/api-search.component';
import { SavedBookListComponent } from './bookshelf-page/saved-book-list/saved-book-list.component';
import { SingleBookDetailsComponent } from './bookshelf-page/single-book-details/single-book-details.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { SingleBookFormComponent } from './bookshelf-page/single-book-form/single-book-form.component';
import { AddBookNotificationComponent } from './library-page/add-book-notification/add-book-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    BookshelfPageComponent,
    LibraryPageComponent,
    NavigationComponent,
    BookComponent,
    ApiResultsListComponent,
    ApiSearchComponent,
    SavedBookListComponent,
    SingleBookDetailsComponent,
    DropdownDirective,
    SingleBookFormComponent,
    AddBookNotificationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
