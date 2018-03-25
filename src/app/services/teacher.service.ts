import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from "rxjs/observable";
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from 'rxjs/operators';

import { Teacher } from "../models/teacher";
import { MessageService } from "./message.service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TeacherService {

  //private teachersUrl = 'http://localhost:8080/teachers';
  private teachersUrl = 'api/teachers';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.teachersUrl)
      .pipe(
        tap(teachers =>
          catchError(this.handleError('getTeachers', []))
        ));
  }

  getTeacher(id: number): Observable<Teacher> {
    const url = `${this.teachersUrl}/${id}`;
    return this.http.get<Teacher>(url).
      pipe(tap(_ => catchError(this.handleError<Teacher>(`gerTeacher id=${id}`))));
  }

  updateTeacher(teacher: Teacher): Observable<any> {
    return this.http.put(this.teachersUrl, teacher, httpOptions)
      .pipe(catchError(this.handleError<any>('updateTeacher')));
  }

  addTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.teachersUrl, teacher, httpOptions)
      .pipe(
        tap((teacher: Teacher) => this.log(`added Teacher id=${teacher.id}`)),
        catchError(this.handleError<Teacher>('addTeacher')));
  }

  deleteTeacher(teacher: Teacher): Observable<Teacher> {
    const url = `${this.teachersUrl}/${teacher.id}`;
    return this.http.delete<Teacher>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted teacher id=${teacher.id}`)),
        catchError(this.handleError<Teacher>('deleteTeacher')));
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
    this.messageService.add('TeacherService : ' + message);
  }
}