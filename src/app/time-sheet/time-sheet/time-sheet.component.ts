import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/data/employee.service.js';
import { EMPLOYEES } from '../../data/employees.js'

@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.scss']
})
export class TimeSheetComponent implements OnInit {
  employeesList;
  lgemployeesList;
  presentEmp = new Array()
  abscentEmp = new Array()
  excuseEmp = new Array()
  finalList = new Array()
  state
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeesList = this.employeeService.get();
    this.lgemployeesList = this.employeesList.length;
    this.state = false;
  }

  /**************START BUTTON ************** */
  startAction() {
    this.state = true
  }

  /**************PRESENCE BUTTON ************** */
  employeePresent(id: number) {
    const i = EMPLOYEES.findIndex(e => e.id === id);
    EMPLOYEES[i].state = "Present";
    this.finalList.push(EMPLOYEES[i])
    this.presentEmp.push(EMPLOYEES[i])
    this.employeesList.splice(i, 1);
    this.lgemployeesList = this.lgemployeesList - 1;

  }

  /**************ABSCENT BUTTON ************** */
  employeeAbscent(id: number) {
    const i = EMPLOYEES.findIndex(e => e.id === id);
    EMPLOYEES[i].state = "Abscent";
    this.finalList.push(EMPLOYEES[i])
    this.abscentEmp.push(EMPLOYEES[i])
    this.employeesList.splice(i, 1);
    this.lgemployeesList = this.lgemployeesList - 1;

  }

  /**************EXCUSE BUTTON ************** */
  employeeExcuse(id: number) {
    const i = EMPLOYEES.findIndex(e => e.id === id);
    EMPLOYEES[i].state = "Excuse";
    this.finalList.push(EMPLOYEES[i])
    this.excuseEmp.push(EMPLOYEES[i])
    this.employeesList.splice(i, 1);
    this.lgemployeesList = this.lgemployeesList - 1;

  }

}
