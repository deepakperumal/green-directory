import { Component } from '@angular/core';
@Component({
  selector: 'ngx-public',
  template: `
  <div>
    <router-outlet></router-outlet>
  </div>
`,
  styleUrls: ['public.component.scss'],
})
export class PublicComponent {

}
  