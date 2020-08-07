import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-professional-services',
  templateUrl: './professional-services.component.html',
  styleUrls: ['./professional-services.component.scss']
})
export class ProfessionalServicesComponent implements OnInit {

  serviceList = [
  {
    title: 'Green Tips',
    desc: 'Lorem id eum diam volutpat'
  },
  {
    title: 'Green Blogs',
    desc: 'Lorem id eum diam volutpat'
  },
  {
    title: 'Green Events',
    desc: 'Lorem id eum diam volutpat'
  },
  {
    title: 'Green Agriculture',
    desc: 'Lorem id eum diam volutpat'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
