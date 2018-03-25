import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Lesson } from '../../../models/lesson';
import { LessonService } from '../../../services/lesson.service';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {
  
  lesson: Lesson;

  constructor(
    private lessonService: LessonService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getLesson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.lessonService.getLesson(id).subscribe(lesson => this.lesson = lesson);
  }

  save(): void {
    this.lessonService.updateLesson(this.lesson).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getLesson();
  }
}
