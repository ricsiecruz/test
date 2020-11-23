
 
import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { map, filter} from 'rxjs/operators';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  product;
 
     constructor(private router:Router, private activatedRoute:ActivatedRoute) {
          console.log(this.router.getCurrentNavigation().extras.state);
     }
 
     ngOnInit() {
          //console.log(history.state);
          this.product=history.state;
     }

}
