import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';

import { Student } from '../models/Student';
import { environment } from '../../environments/environment';
import { MessageService } from '../messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private ROOT_API_URL = environment.apiUrl + '/api/Student';

  constructor(private http: HttpClient,
    private messageService: MessageService
    ) {}

  getStudents(): Observable<Student[]> {

      return this.http.get<Student[]>(this.ROOT_API_URL);
  }


  private log(message: string) {
    this.messageService.add(`StudentsService: ${message}`);
  }
}
