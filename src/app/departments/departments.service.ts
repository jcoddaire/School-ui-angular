import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';

import { Department } from '../models/Department';
import { environment } from '../../environments/environment';
import { DepartmentsComponent } from './departments.component';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private ROOT_API_URL = environment.apiUrl + '/api/Department';
  private DEPARTMENT_ID_STARTING_POINT = 1001;

    constructor(private http: HttpClient) {}

    getDepartments(): Observable<Department[]> {

        return this.http.get<Department[]>(this.ROOT_API_URL);
    }

    addDepartment(department: Department, departments: Department[]): Observable<Department> {

      if (department && departments) {
        department.departmentID = this.getUnusedDepartmentID(departments);
        if (department.departmentID) {
          return this.http.post<Department>(this.ROOT_API_URL, department, httpOptions);
        }
      }
      return null;
    }

    //  This logic ought to be on the server (identity column), but I want to see how Angular handles this.
    getUnusedDepartmentID(departments: Department[]): number {

      let result = 0;

      if (!departments) {
        return 1;
      }

      let ii = this.DEPARTMENT_ID_STARTING_POINT;
      for (ii; ii < Number.MAX_VALUE; ii++) {
        if (!departments.some(d => d.departmentID === ii)) {
          return ii;
        }
      }
      return null;
    }
}
