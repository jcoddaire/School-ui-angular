import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Person } from '../models/Person'
import { MessageService } from '../messages/message.service'
import { environment } from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': 'http://localhost:4200'})
}

@Injectable({
    providedIn: 'root'
})

export class PeopleService {

    private ROOT_API_URL = environment.apiUrl + '/api/People';

    constructor(private http: HttpClient, private messageService: MessageService) {}

    getPeople(): Observable<Person[]> {

        this.log("Getting people...");

        return this.http.get<Person[]>(this.ROOT_API_URL)
        .pipe(            
            tap(_ => this.log("fetched people")),
            catchError(this.handleError('getPeople', []))
        );

        this.log("gotem!");
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

    
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`PeopleService: ${message}`);
    }
}