import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';

import { Department } from '../models/Department'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private ROOT_API_URL = environment.apiUrl + '/api/Department';

    constructor(private http: HttpClient) {}

    getDepartments(): Observable<Department[]> {        

        return this.http.get<Department[]>(this.ROOT_API_URL);
    }
}
