import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  public product = { id:'', name:""};
 
  constructor(private router : Router) {
  }
 
  gotoDynamic() {
    //this.router.navigateByUrl('/dynamic', { state: { id:1 , name:'Angular' } });
    this.router.navigateByUrl('/sample', { state: this.product });
  }

  ngOnInit(): void {
  }

}
