import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course'
import { CourseService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CourseComponent implements OnInit {

  APPLICATION_TITLE = "Coddaire University";  
  courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {

      this.courseService.getCourses().subscribe(c => this.courses = c);
  }
}
