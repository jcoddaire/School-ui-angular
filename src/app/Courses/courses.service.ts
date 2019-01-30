import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Course } from '../models/Course'
import { MessageService } from '../messages/message.service'
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class CourseService {

    private ROOT_API_URL = environment.apiUrl + '/api/Course';

    constructor(private http: HttpClient, private messageService: MessageService) {}

    getCourses(): Observable<Course[]> {

        this.log("Getting courses...");

        return this.http.get<Course[]>(this.ROOT_API_URL)
        .pipe(            
            tap(_ => this.log("fetched courses")),
            catchError(this.handleError('getCourses', []))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
        };
    }    
    
    private log(message: string) {
        this.messageService.add(`CourseService: ${message}`);
    }
}