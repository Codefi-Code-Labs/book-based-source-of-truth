import { RouterModule, Routes } from '@angular/router';
import { BookshelfPageComponent } from './bookshelf-page/bookshelf-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { NgModule } from '@angular/core';
import { SingleBookDetailsComponent } from './bookshelf-page/single-book-details/single-book-details.component';
import { SingleBookFormComponent } from './bookshelf-page/single-book-form/single-book-form.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/bookshelf', pathMatch: 'full' },
  {
    path: 'bookshelf',
    component: BookshelfPageComponent,
    children: [
      { path: 'new', component: SingleBookFormComponent },
      { path: ':id', component: SingleBookDetailsComponent },
      { path: ':id/edit', component: SingleBookFormComponent },
    ],
  },
  { path: 'library', component: LibraryPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
