import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Login } from '../models/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

  //private loginsUrl = 'api/logins';
  private loginsUrl = 'http://localhost:8080/logins';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  addLogin(login: Login): Observable<Login> {
    return this.http.post<Login>(this.loginsUrl, login, httpOptions).pipe(
      tap(login => this.log(`Added login id=${login.id}`)),
      catchError(this.handleError<Login>('addLogin'))
    );
    //return this.http.post<Login>(this.loginsUrl, login, httpOptions);
  }

  updateLogin(login: Login): Observable<any> {
    return this.http.put(this.loginsUrl, login, httpOptions).pipe(
      tap(_ => this.log(`Updated login id=${login.id}`)),
      catchError(this.handleError<any>('updateLogin'))
    );
  }

  getLogins(): Observable<Login[]> {
    return this.http.get<Login[]>(this.loginsUrl).pipe(
      tap(logins => this.log(`Fetched logins`)),
      catchError(this.handleError<Login[]>('getLogins', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log this Service message with the MessageService */
  private log(message: string) {
    this.messageService.add('LoginService : ' + message);
  }
}
