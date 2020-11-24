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

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public product = { id:'', name:""};
  
  constructor(private router : Router,
    private formBuilder: FormBuilder) {
  }

   gotoDynamic() {
    //this.router.navigateByUrl('/dynamic', { state: { id:1 , name:'Angular' } });
    if (this.myform.valid) {
      console.log("Form Submitted!");
      this.router.navigateByUrl('/sample', { state: this.product });
    } else {
      console.log('fafd')
    }
    // this.router.navigateByUrl('/sample', { state: this.product });
  }

  // ngOnInit(): void {
  // }

  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;
  id: FormControl;


  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.myform = this.formBuilder.group({
      // email: [null, [Validators.required, Validators.email]],
      // password: [null, Validators.required],
      // id: [null, [Validators.required, Validators.id]],
      id: [null, Validators.required]
    });
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('');
    this.id = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language,
      id: this.id
    });
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      this.myform.reset();
    }
  }
  clear() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      this.myform.reset();
    }
  }

}
