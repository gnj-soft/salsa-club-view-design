import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Lesson } from '../../../models/lesson';
import { LessonService } from '../../../services/lesson.service';
import { ConstantsService } from '../../../services/constants.service';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  detailHeader = "What about this lesson";
  
  lessonsList;
  lessonLevels;

  lesson: Lesson;

  constructor(
    private lessonService: LessonService,
    private constantsService: ConstantsService,
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
    this.lessonsList = this.constantsService.lessonsList;
    this.lessonLevels = this.constantsService.level;
    this.getLesson();
  }
}
