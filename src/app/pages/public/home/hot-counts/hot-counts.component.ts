import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-hot-counts',
  templateUrl: './hot-counts.component.html',
  styleUrls: ['./hot-counts.component.scss']
})
export class HotCountsComponent implements OnInit {

  countItems = [
    {
      name: 'tutorial',
      icon: 'headset_mic',
      count: '3203',
      label: 'audio tutorials'
    },
    {
      name: 'posts',
      icon: 'library_books',
      count: '8421',
      label: 'available posts'
    },
    {
      name: 'map',
      icon: 'map',
      count: '512',
      label: 'map search'
    },
    {
      name: 'events',
      icon: 'date_range',
      count: '1203',
      label: 'active events'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
