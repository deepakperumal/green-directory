import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { CategoryAddComponent }  from './category/category-add.component'
import { CategoryListComponent }  from './category/category-list.component'
 
const routes: Routes = [{
  path: '',
  component: PagesComponent, 
  children: [
    {
      path: 'dashboard', 
      component: ECommerceComponent,
    },
    {
      path: 'category',
      children:[
        {
          path:'add',
          component:CategoryAddComponent
        },
        {
          path:'list',
          component:CategoryListComponent
        }
      ] 
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
