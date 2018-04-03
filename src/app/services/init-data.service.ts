import { Injectable } from '@angular/core';
import { LessonService } from './lesson.service';
import { Lesson } from '../models/lesson';

@Injectable()
export class InitDataService {

  constructor(private lessonService: LessonService) { }

  lessons: Lesson[];

  getLessonsIds(): number[] {
    let lessons: Lesson[];
    let ids: number[] = [];
    this.lessonService.getLessons().subscribe(lessTab => lessons = lessTab);
    // for (let index = 0; index < 10; index++) {
    //   ids.push(lessons[index].id);      
    // }
    return ids;
  }

  getLessons(): Lesson[] {
    //let lessons: Lesson[];
    this.lessonService.getLessons().subscribe(lessTab => this.lessons = lessTab);
    console.log("Lessons **** ", this.lessons );
    return this.lessons;
  }
}
