import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module'
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'top',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};


@NgModule({
  imports: [
    AuthRoutingModule,
    RouterModule,
    FormsModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
})
export class AuthModule {
}
