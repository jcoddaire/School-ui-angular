import { Component, OnInit } from '@angular/core';

import { Course } from '../models/Course';
import { CourseService } from './courses.service';

import { Department } from '../models/Department';
import { DepartmentsService } from '../departments/departments.service';
import { MessageService } from '../messages/message.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CourseComponent implements OnInit {

  APPLICATION_TITLE = 'University of Farmington';
  courses: Course[];
  departments: Department[];

  constructor(
    private courseService: CourseService,
    private departmentService: DepartmentsService,
    private messageService: MessageService
  ) { }

  ngOnInit() {

    // get the data.
    this.getCourses();
  }

  matchDepartments(): void {
    // parse through the data and add each Department.Name to the course data.
     this.courses.forEach(element => {
       this.departments.forEach(d => {
           if (d.departmentID === element.departmentID) {
             element.departmentName = d.name;
           }
       });
     });
  }

  getCourses(): void {
      this.courseService.getCourses().subscribe(courses => {
        this.courses = courses;
        this.getDepartments();
      });
  }

  getDepartments(): void {
    this.departmentService.getDepartments().subscribe(d => {
      this.departments = d;
      this.matchDepartments();
    });
  }

  private log(message: string) {
    this.messageService.add(`CourseComponent: ${message}`);
  }
}
