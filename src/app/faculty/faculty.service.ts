import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';

import { Instructor } from '../models/Instructor';
import { environment } from '../../environments/environment';
import { MessageService } from '../messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  private ROOT_API_URL = environment.apiUrl + '/api/Instructor';

  constructor(private http: HttpClient,
    private messageService: MessageService
    ) {}

  getFaculty(): Observable<Instructor[]> {

      return this.http.get<Instructor[]>(this.ROOT_API_URL);
  }


  private log(message: string) {
    this.messageService.add(`FacultyService: ${message}`);
  }
}
