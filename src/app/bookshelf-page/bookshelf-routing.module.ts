import { RouterModule, Routes } from '@angular/router';
import { BookshelfPageComponent } from './bookshelf-page.component';
import { bookResolver } from './bookshelf.resolver';
import { SingleBookFormComponent } from './single-book-form/single-book-form.component';
import { SingleBookDetailsComponent } from './single-book-details/single-book-details.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: BookshelfPageComponent,
    resolve: [bookResolver],
    children: [
      { path: 'new', component: SingleBookFormComponent },
      {
        path: ':id',
        component: SingleBookDetailsComponent,
        resolve: [bookResolver],
      },
      {
        path: ':id/edit',
        component: SingleBookFormComponent,
        resolve: [bookResolver],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookshelfRoutingModule {}
