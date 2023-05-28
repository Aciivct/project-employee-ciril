import { Router,ActivatedRoute } from '@angular/router';
import { Employee } from './../modal/employee';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { EmployeeService } from './employee-service.service';
import { FormBuilder } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private service: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
    public app: AppComponent
  ) {}


  employeeList = new Array<Employee>();


  ngOnInit(): void {
    this.getAllEmployes();
  }

  getAllEmployes() {
    this.service.getAllEmployes("get-all-employees").subscribe(data => {
      this.employeeList = data ;
    });
  }
}
