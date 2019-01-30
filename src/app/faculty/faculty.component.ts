import { Component, OnInit } from '@angular/core';
import { Instructor } from '../models/Instructor';
import { FacultyService } from './faculty.service';

import { Department } from '../models/Department';
import { DepartmentsService } from '../departments/departments.service';
import { MessageService } from '../messages/message.service';


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {

  faculty: Instructor[];
  departments: Department[];

  constructor(
    private facultyService: FacultyService,
    private departmentService: DepartmentsService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.getFaculty();
  }

  getFaculty(): void {
    this.facultyService.getFaculty().subscribe(d => {
        this.faculty = d;
        this.filterFaculty();
        this.getDepartments();
      });
  }

  getDepartments(): void {
    this.departmentService.getDepartments().subscribe(d => {
      this.departments = d;
      this.matchDepartments();
    });

  }

  filterFaculty(): void {
      // Remove all terminated instructors.
      for (let ii = 0; ii < this.faculty.length; ii++) {
        if (this.faculty[ii].terminated) {
          this.faculty.splice(ii, 1);
        }
      }
  }

  matchDepartments(): void {
    // parse through the data and add each Department.Name to the course data.
     this.faculty.forEach(element => {
       element.courses.forEach(c => {
        this.departments.forEach(d => {
          if (c.departmentID === d.departmentID) {
            c.departmentName = d.name;
          }
        });
       });
     });
  }

  private log(message: string) {
    this.messageService.add(`FacultyComponent: ${message}`);
  }
}
