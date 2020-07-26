import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '../../../@core/http/user.service'
@Component({
    selector: 'ngx-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
  })
  export class LoginComponent {
  email:String;
  password:String;
  constructor(public userService :UserService,public router: Router)
  {

  }
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
      this.router.navigate(['admin']);
     }
    },error => {
      console.log(error)
  });
  }

}
