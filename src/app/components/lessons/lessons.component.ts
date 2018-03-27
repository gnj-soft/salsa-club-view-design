import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { Lesson } from '../../models/lesson';
import { LessonService } from '../../services/lesson.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  lessons: Lesson[];
  newLessonFormData;

  constructor(private lessonService: LessonService) { }

  getLessons(): void {
    this.lessonService.getLessons().subscribe(lessons => this.lessons = lessons);
  }

  add(lessonName: string, level: number, startDate: Date, endDate: Date): void {
    lessonName = lessonName.trim();
    if (!lessonName || !level || !startDate || !endDate) { return; };
    const duration = 5;
    this.lessonService.addLesson({lessonName, level, startDate, endDate, duration} as Lesson).subscribe(lesson => this.lessons.push(lesson));
  }

  delete(lesson: Lesson): void {
    this.lessons = this.lessons.filter(l => l !== lesson);
    this.lessonService.deleteLesson(lesson).subscribe();
  }

  onSubmit(data): void {
    this.add(data.lessonName, data.level, data.startDate, data.endDate);
    this.newLessonFormData.reset();
  }

  ngOnInit() {
    this.getLessons();
    this.newLessonFormData = new FormGroup({
      lessonName: new FormControl("", Validators.compose([
         Validators.required
      ])),
      level: new FormControl("", Validators.compose([
         Validators.required
      ])),
      startDate: new FormControl("", Validators.compose([
        Validators.required
      ])),
      endDate: new FormControl("", Validators.compose([
        Validators.required
      ]))
   });
  }
}
