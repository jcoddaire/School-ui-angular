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
        this.assignClasses();
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

  // Assign class status ("Freshmen, Sophomore, junior, Senior") based on the Enrolled date.
  // TODO: update this to consider credits, ie 30, 60, 90, 120.
  assignClasses(): void {
    if (this.students) {
      for (let yy = 0; yy < this.students.length; yy++) {
        const today = new Date();
        const eDate = new Date(this.students[yy].enrollmentDate);
        const yearsEnrolled = this.monthDiff(eDate, today) / 12;

        switch (true) {
          case (yearsEnrolled < 1):
            this.students[yy].studentClass = 'Freshmen';
            break;
          case (yearsEnrolled < 2):
            this.students[yy].studentClass = 'Sophomore';
            break;
          case (yearsEnrolled < 3):
            this.students[yy].studentClass = 'Junior';
            break;
          case (yearsEnrolled < 4):
            this.students[yy].studentClass = 'Senior';
            break;
          case (yearsEnrolled < 5):
            this.students[yy].studentClass = 'Super Senior';
            break;
          case (yearsEnrolled < 6):
            this.students[yy].studentClass = 'Super Duper Senior';
            break;
          case (yearsEnrolled >= 6):
            let superSeniorString = 'Super Duper';
            superSeniorString += '<sup>' + Math.floor(yearsEnrolled - 4) + '</sup>';
            this.students[yy].studentClass = superSeniorString + ' Senior';
            break;
        }
      }
    }
  }

  private log(message: string) {
    this.messageService.add(`StudentsComponent: ${message}`);
  }

  monthDiff(d1: Date, d2: Date): number {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
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
