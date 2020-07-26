import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public.component'
import { AboutComponent } from './about/about.component'

const routes: Routes = [{
  path: '',
  component: PublicComponent,
  children: [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'about',
      component: AboutComponent,
    },
   ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {
}
