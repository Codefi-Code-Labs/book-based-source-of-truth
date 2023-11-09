import { NgModule } from '@angular/core';
import { LibraryPageComponent } from './library-page.component';
import { ApiResultsListComponent } from './api-results-list/api-results-list.component';
import { ApiSearchComponent } from './api-search/api-search.component';
import { AddBookNotificationComponent } from './add-book-notification/add-book-notification.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LibraryRoutingModule } from './library-routing.module';

@NgModule({
  declarations: [
    // Compoenents
    LibraryPageComponent,
    ApiResultsListComponent,
    ApiSearchComponent,
    AddBookNotificationComponent,
    // Directives
    // Pipes
  ],
  imports: [SharedModule, LibraryRoutingModule],
})
export class LibraryModule {}
