import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { StudentsService } from './students.service';

import { MessageService } from '../messages/message.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Student[];
  currentYear: number;
  currentSemester: string;

  constructor(
    private studentService: StudentsService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.getYear();
    this.getSemester();
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(d => {
        this.students = d;
        this.filterStudentsByCurrentSemester();
      });
  }

  filterStudentsByCurrentSemester(): void {
    for (let ii = 0; ii < this.students.length; ii++) {
      for (let rr = 0; rr < this.students[ii].courses.length; rr++) {
        if (this.currentSemester !== this.students[ii].courses[rr].enrolledSemester) {
          this.students[ii].courses.splice(rr, 1);
        } else {
          if (this.currentYear !== this.students[ii].courses[rr].enrolledYear) {
            this.students[ii].courses.splice(rr, 1);
          }
        }
      }
    }

    // iterate again and remove students with no current classes.
    for (let ii = 0; ii < this.students.length; ii++) {
      if (this.students[ii].courses.length <= 0) {
        this.students.splice(ii, 1);
      }
    }
  }

  private log(message: string) {
    this.messageService.add(`StudentsComponent: ${message}`);
  }

  getYear(): void {

    const today = new Date();
    this.currentYear = today.getFullYear();

  }

  getSemester(): void {

    const today = new Date();
    const currentMonth = today.getMonth();

    switch (currentMonth + 1) { // added 1 because January is the FIRST month not the ZEROTH month. That doesn't even make sense...
      case 1:
      case 2:
      case 3:
      case 4:
        this.currentSemester = 'Winter';
        break;
      case 5:
      case 6:
        this.currentSemester = 'Spring';
        break;
      case 7:
      case 8:
        this.currentSemester = 'Summer';
        break;
      case 9:
      case 10:
      case 11:
      case 12:
        this.currentSemester = 'Fall';
        break;
      default:
        this.currentSemester = 'Unknown!';
        break;
    }
  }
}
