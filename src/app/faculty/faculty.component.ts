import { Component, OnInit } from '@angular/core';
import { Instructor } from '../models/Instructor';
import { FacultyService } from './faculty.service';
import { MessageService } from '../messages/message.service';


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {

  faculty: Instructor[];

  constructor(
    private facultyService: FacultyService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.getFaculty();
  }

  getFaculty(): void {
    this.facultyService.getFaculty().subscribe(d => {
        this.faculty = d;
        this.filterFaculty();
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

  private log(message: string) {
    this.messageService.add(`FacultyComponent: ${message}`);
  }
}
