import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { EmployeelogComponent } from './employee/employeelog.component';

@Component({
  selector: 'emp-log',
  templateUrl: './employeelog.component.html',
  styleUrls: ['./employeelog.component.css']
})
export class EmployeelogComponent implements OnInit {
    constructor() {}

    const empLogs = [
      {"LogDay" : "Monday" , "RegularLogHours" :8},
      {"LogDay" : "Tuesday" , "RegularLogHours" :8},
      {"LogDay" : "Wednesday" , "RegularLogHours" :8},
      {"LogDay" : "Thursday" , "RegularLogHours" :8},
      {"LogDay" : "Friday" , "RegularLogHours" :8},

    ];

    ngOnInit() {}
}
