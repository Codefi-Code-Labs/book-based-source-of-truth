import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { authGuard } from './auth.guard';

@NgModule({
  declarations: [
    // Compoenents
    AuthComponent,
    // Directives
    // Pipes
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: AuthComponent }]),
  ],
})
export class AuthModule {}
