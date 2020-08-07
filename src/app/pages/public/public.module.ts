import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from  './public-routing.module'
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { HeaderComponent } from './common/header.component'
import { FooterComponent } from './common/footer.component'
import { CategoryComponent } from './home/category/category.component'

@NgModule({
  imports: [
    PublicRoutingModule,
    RouterModule,
    FormsModule 
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent
  ],
})
export class PublicModule {
}
