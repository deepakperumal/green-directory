import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from  './public-routing.module'
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { HeaderComponent } from './common/header.component'
import { CategoryComponent } from './home/category/category.component'
import { FooterComponent } from './common/footer.component';
import { CarouselComponent } from './home/carousel/carousel.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common'
import {MatIconModule} from '@angular/material/icon';
import { HotCountsComponent } from './home/hot-counts/hot-counts.component';
import { FeaturesComponent } from './home/features/features.component';
import { ProfessionalServicesComponent } from './home/professional-services/professional-services.component';
import { GetStartedComponent } from './home/get-started/get-started.component';
import { InspirationComponent } from './home/inspiration/inspiration.component';
import { BusinessStepsComponent } from './home/business-steps/business-steps.component';

@NgModule({
  imports: [
    PublicRoutingModule,
    RouterModule,
    FormsModule,
    NgbModule,
    CommonModule,
    MatIconModule,
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    CarouselComponent,
    HotCountsComponent,
    FeaturesComponent,
    ProfessionalServicesComponent,
    GetStartedComponent,
    InspirationComponent,
    BusinessStepsComponent
  ],
})
export class PublicModule {
}
