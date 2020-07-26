import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module'
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './login/login.component'

@NgModule({
  imports: [
    AuthRoutingModule,
    RouterModule,
    FormsModule 
  ],
  declarations: [
    AuthComponent,
    LoginComponent
  ],
})
export class AuthModule {
}
