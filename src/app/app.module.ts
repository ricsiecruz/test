import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { SampleComponent } from './sample/sample.component';
import { HttpClientModule } from '@angular/common/http';
 
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    HomeComponent,
    TestComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
