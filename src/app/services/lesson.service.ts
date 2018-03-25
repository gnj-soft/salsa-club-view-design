import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Lesson } from '../models/lesson';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LessonService {

  private lessonsUrl = 'api/lessons';

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.lessonsUrl)
      .pipe(
        tap(lessons =>
          catchError(this.handleError('getLessons', []))
        ));
  }

  getLesson(id: number): Observable<Lesson> {
    const url = `${this.lessonsUrl}/${id}`;
    return this.http.get<Lesson>(url).
      pipe(tap(_ => catchError(this.handleError<Lesson>(`getLesson id=${id}`))));
  }

  addLesson(lesson: Lesson): Observable<Lesson> {
    return this.http.post<Lesson>(this.lessonsUrl, lesson, httpOptions)
      .pipe(
        tap((lesson: Lesson) => this.log(`added Lesson id=${lesson.id}`)),
        catchError(this.handleError<Lesson>('addLesson')));
  }

  updateLesson(lesson: Lesson): Observable<any> {
    return this.http.put(this.lessonsUrl, lesson, httpOptions)
      .pipe(
        tap(_ => this.log(`update lesson id=${lesson.id}`)),
        catchError(this.handleError<any>('updateLesson')));
  }

  deleteLesson(lesson: Lesson) {
    const url = `${this.lessonsUrl}/${lesson.id}`;
    return this.http.delete<Lesson>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted lesson id=${lesson.id}`)),
        catchError(this.handleError<Lesson>('deleteLesson')));
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
    this.messageService.add('LessonService : ' + message);
  }

}
