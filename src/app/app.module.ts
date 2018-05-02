import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmployeelogComponent } from './employee/employeelog.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeelogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,EmployeelogComponent]
})
export class AppModule { }
