import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookComponent } from './book/book.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { SortBooksPipe } from './pipes/sortBooks.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // Components
    BookComponent,

    // Directives
    DropdownDirective,

    // Pipes
    SortBooksPipe,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    // Modules
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // Components
    BookComponent,

    // Directives
    DropdownDirective,

    // Pipes
    SortBooksPipe,
  ],
})
export class SharedModule {}
