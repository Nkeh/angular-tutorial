import { Component, inject } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from 'console';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  public employees: any = [];
  public errorMsg: any;

  private employee = inject(EmployeeService);

  constructor (private _employeeService: EmployeeService) {

  };

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe({next: data => this.employees = data,
               error: error => this.errorMsg = error});
  }

}
