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

  departments: Department[];

  constructor(
    private departmentService: DepartmentsService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments(): void {
    this.departmentService.getDepartments().subscribe(d => {
      this.departments = d;
      // order the departments from highest budget to lowest.
      this.departments.sort((b, a) => a.budget >= b.budget ? 1 : a.budget === b.budget ? 0 : -1);
    });
  }

  private log(message: string) {
    this.messageService.add(`DepartmentsComponent: ${message}`);
  }
}
