import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { LoginComponent } from './login.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { UserService } from '../../@core/http/user.service'
import { LoginRoutingModule } from './login-routing.module';
@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [UserService]
})
export class LoginModule { }
