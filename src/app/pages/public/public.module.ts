import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from  './public-routing.module'
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { HeaderComponent } from './common/header.component'
import { FooterComponent } from './common/footer.component';
import { CarouselComponent } from './home/carousel/carousel.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common'

@NgModule({
  imports: [
    PublicRoutingModule,
    RouterModule,
    FormsModule,
    NgbModule,
    CommonModule 
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent
  ],
})
export class PublicModule {
}
