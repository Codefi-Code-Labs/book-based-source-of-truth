import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { authGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/bookshelf',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    canActivate: [authGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'bookshelf',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./bookshelf-page/bookshelf.module').then(
        (m) => m.BookshelfModule
      ),
  },
  {
    path: 'library',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./library-page/library.module').then((m) => m.LibraryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
