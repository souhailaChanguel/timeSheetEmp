import { Injectable } from '@angular/core';
import { EMPLOYEES } from './employees.js'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  /************Get Employees *************/
  get() { return EMPLOYEES; }

  /************Get Employee *************/
  getEmployee(id: number) {
    return EMPLOYEES[id];
  }
}
