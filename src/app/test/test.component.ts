import { NgModule,
    Component,
    Pipe,
    OnInit } from '@angular/core';
    import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'; 
import {  
    DataService  
} from '../data.service';  

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  frmRegister: FormGroup;  
    constructor(private _fb: FormBuilder, private dataservice: DataService) {}  

    ngOnInit(): void {  

        this.frmRegister = this._fb.group({  
            regFullName: "",  
            regEmail: ""  
        });  
    }  

    SaveEmployee(value) {  
        this.dataservice.SaveEmployee(value);  
    }  

}
