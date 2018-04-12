import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Member } from '../models/member';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MemberService {

  //private membersUrl = 'api/members';
  private membersUrl = 'http://localhost:8080/members';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.membersUrl).pipe(
      tap(members => this.log(`Fetched members`)),
      catchError(this.handleError<Member[]>('getMembers', []))
    );
  }

  addMember(member: Member): Observable<Member> {
    return this.http.post<Member>(this.membersUrl, member, httpOptions).pipe(
      tap(member => this.log(`Added member id=${member.id}`)),
      catchError(this.handleError<Member>('addMember'))
    );
  }

  deleteMember(member: Member | number): Observable<Member> {
    const id = typeof member === 'number' ? member : member.id;
    const url = `${this.membersUrl}/${id}`;
    return this.http.delete<Member>(url, httpOptions).pipe(
      tap(_ => this.log(`Deleted member id=${id}`)),
      catchError(this.handleError<Member>('deleteMember'))
    );
  }

  getMember(id: number): Observable<Member> {
    const url = `${this.membersUrl}/${id}`;
    return this.http.get<Member>(url).pipe(
      tap(_ => this.log(`Fetched member id=${id}`)),
      catchError(this.handleError<Member>(`getMember id=${id}`))
    );
  }

  updateMember(member: Member): Observable<any> {
    return this.http.put(this.membersUrl, member, httpOptions).pipe(
      tap(_ => this.log(`Updated member id=${member.id}`)),
      catchError(this.handleError<any>('updateMember'))
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