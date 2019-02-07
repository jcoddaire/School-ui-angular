import { Component, OnInit } from '@angular/core';
import { Department } from '../models/Department';
import { DepartmentsService } from './departments.service';
import { MessageService } from '../messages/message.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  currentName: string;
  currentBudget: number;
  currentCreatedDate: Date;

  departments: Department[];

  constructor(
    private departmentService: DepartmentsService,
    private messageService: MessageService
    ) {

      this.currentName = '';
      this.currentBudget = 0;
      this.currentCreatedDate = new Date();

     }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments(): void {
    this.departmentService.getDepartments().subscribe(d => {
      this.departments = d;
      this.sortDepartmentsByBudget();
    });
  }

  addDepartment(name: string, budget: number): void {

    if (name === null) {
      return;
    }

    if (name.trim() === '') {
      return;
    }

    const cDept = new Department();
    cDept.name = name;
    cDept.budget = budget;
    cDept.createdDate = new Date();

    this.departmentService.addDepartment(cDept, this.departments).subscribe(d => {
      this.departments.push(d);
      this.sortDepartmentsByBudget();
    });

  }

  private sortDepartmentsByBudget(): void {
    // order the departments from highest budget to lowest.
    this.departments.sort((b, a) => a.budget >= b.budget ? 1 : a.budget === b.budget ? 0 : -1);
  }

  private log(message: string) {
    this.messageService.add(`DepartmentsComponent: ${message}`);
  }
}
