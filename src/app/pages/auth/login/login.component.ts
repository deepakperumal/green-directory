import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '../../../@core/http/user.service'
import { NotifierService } from 'angular-notifier';



@Component({
    selector: 'ngx-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
 
  })
  export class LoginComponent {
  email:String;
  password:String;
  constructor(public userService :UserService,public router: Router,private notifier: NotifierService )
  {

  }
  userLogin()
  {
      const user = {
        email:this.email,
        password:this.password
      }
      if(!user.email || !user.password)
      {
        this.notifier.notify("error", "Fields cannot be empty");
        return;
      }

      this.userService.login(user).subscribe((result) => {
      if(result['token'])
      { 
        this.notifier.notify("success", "Redirecting to dashboard");
        localStorage.setItem('token',result['token'])
        this.router.navigate(['admin']);
      }
      else
      this.notifier.notify("error", result['error'].message);
      },error => { 
        this.notifier.notify("error", "Invalid credentials");
    });
  }
}
