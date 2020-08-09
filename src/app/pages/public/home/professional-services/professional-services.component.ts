import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
@Component({
  selector: 'ngx-professional-services',
  templateUrl: './professional-services.component.html',
  styleUrls: ['./professional-services.component.scss']
})
export class ProfessionalServicesComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){ 
      //alert('GeeksForGeeks'); 
    }); 

  }

}
