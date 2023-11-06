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
import { TemplateDrivenApproachComponent } from './bookshelf-page/single-book-form/template-driven-approach/template-driven-approach.component';
import { ReactiveApproachComponent } from './bookshelf-page/single-book-form/reactive-approach/reactive-approach.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortBooksPipe } from './shared/pipes/sortBooks.pipe';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

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
    TemplateDrivenApproachComponent,
    ReactiveApproachComponent,
    SortBooksPipe,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
