import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { of } from "rxjs/observable/of";
import { catchError, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { AuthToken } from '../models/auth-token';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {

  private tokenUrl = 'http://localhost:8080/token/generate-token';

  constructor(private messageService: MessageService, private http: HttpClient) {
  }

  attemptAuth(ussername: string, password: string): Observable<AuthToken> {
    const credentials = {username: ussername, password: password};
    console.log('attempAuth ::');
    return this.http.post<AuthToken>(this.tokenUrl, credentials, httpOptions).pipe(
      tap(authToken => this.log(`Token generation `)),
      catchError(this.handleError<AuthToken>('attemptAuth'))
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
    this.messageService.add('MemberService : ' + message);
  }
}
