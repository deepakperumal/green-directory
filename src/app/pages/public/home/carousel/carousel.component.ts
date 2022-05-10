import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { interval } from 'rxjs'

@Component({
  selector: 'ngx-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit{
  @ViewChild('carousel', {static: true}) carousel : any;

  images = [1, 2, 3].map((n) => `../assets/images/c_image${n}.jpg`);
  animationInterval = 10000; //in milliseconds
  constructor() {
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void{
    let self = this;
    interval(self.animationInterval).subscribe(() => self.carousel.next());
  }

}