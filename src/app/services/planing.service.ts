import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Planing } from '../models/planing';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PlaningService {

  private planingsUrl = 'api/planings';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getPlanings(): Observable<Planing[]> {
    return this.http.get<Planing[]>(this.planingsUrl)
      .pipe(
        tap(members =>
          catchError(this.handleError('getMembers', []))
        ));
  }

  addPlaning(planing: Planing): Observable<Planing> {
    return this.http.post<Planing>(this.planingsUrl, planing, httpOptions)
    .pipe(
      tap((planing: Planing) => this.log(`added Planing id=${planing.id}`)),
      catchError(this.handleError<Planing>('addPlaning')));
  }

  deletePlaning(planing: Planing) {
    const url = `${this.planingsUrl}/${planing.id}`;
    return this.http.delete<Planing>(url, httpOptions)
    .pipe(
      tap(_ => this.log(`deleted planing id=${planing.id}`)),
      catchError(this.handleError<Planing>('deletePlaning')));
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
    this.messageService.add('PlaningService : ' + message);
  }
}
