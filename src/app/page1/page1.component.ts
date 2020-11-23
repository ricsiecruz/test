import { Component, OnInit } from '@angular/core';
import {  
    DataService  
} from '../data.service';  

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private dataservice: DataService) {}  

  ngOnInit(): void {
  }

  SaveEmployee(value) {  
        console.log('page1 start')
        this.dataservice.SaveEmployee(value);  
        console.log('page1 end')
    }  

}
