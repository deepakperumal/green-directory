import { Component } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { UserService } from '../../../@core/http/user.service'
@Component({
  selector: 'ngx-buttons',
  styleUrls: ['./buttons.component.scss'],
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent {
  constructor(public userService :UserService ){}
  register()
  {
    const user = {
      name:'ab999c',
      email:'dd@ss.ll',
      username:'dofff',
      password:'8888'
    }
    this.userService.register(user).subscribe((result) => {
     // This code will be executed when the HTTP call returns successfully 
 });
  }
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
}
 