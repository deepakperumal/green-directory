import { Component } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { UserService } from '../../@core/http/user.service'
import { Router} from '@angular/router';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'ngx-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(public userService :UserService,public router: Router){}
  email:String;
  password:String;
  errorMessage:String; 
  userLogin()
  {
    const user = {
      email:this.email,
      password:this.password
    }
    this.userService.login(user).subscribe((result) => {
     // This code will be executed when the HTTP call returns successfully 
     if(result['token'])
     {
      localStorage.setItem('token',result['token'])
      this.router.navigate(['pages']);
     }
    },error => {
      this.errorMessage = error.error.message
  });
  }
}
 