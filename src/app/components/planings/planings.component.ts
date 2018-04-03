import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Planing } from "../../models/planing";
import { PlaningService } from '../../services/planing.service';
import { LessonService } from '../../services/lesson.service';
import { Lesson } from '../../models/lesson';
import { InitDataService } from '../../services/init-data.service';
import { MemberService } from '../../services/member.service';
import { TeacherService } from '../../services/teacher.service';
import { Member } from '../../models/member';
import { Teacher } from '../../models/teacher';

@Component({
  selector: 'app-planings',
  templateUrl: './planings.component.html',
  styleUrls: ['./planings.component.css']
})
export class PlaningsComponent implements OnInit {

  planings: Planing[];
  lessons: Lesson[];
  members: Member[];
  teachers: Teacher[];
  newPlaningFormData;

  constructor(
    private planingService: PlaningService,
    private lessonService: LessonService,
    private memberService: MemberService,
    private teacherService: TeacherService
  ) { }

  getPlanings(): void {
    this.planingService.getPlanings().subscribe(planings => this.planings = planings);
  }

  add(lessonId: number, teacherId: number, memberId: number, note: string): void {
    if (!teacherId || !teacherId || !memberId) { return; }
    if (!note) {
      note = "No Note for this lesson";
    }
    this.planingService.addPlaning({ lessonId, teacherId, memberId, note } as Planing).subscribe(p => this.planings.push(p));
  }

  delete(planing: Planing): void {
    this.planings = this.planings.filter(p => p !== planing);
    this.planingService.deletePlaning(planing).subscribe;
  }

  onSubmit(data): void {
    this.add(data.lessonId, data.teacherId, data.memberId, data.note);
    this.newPlaningFormData.reset();
  }

  // completePlaningsTable() {
  //   let lesson;
  //   for (let index = 0; index < this.planings.length; index++) {
  //     lesson = this.lessons.find(lesson => lesson.id == this.planings[index].lessonId);
  //     this.planings[index].lessonName = lesson.lessonName;
  //   }
  // }

  ngOnInit() {
    this.getPlanings();
    this.lessonService.getLessons().subscribe(lessons => this.lessons = lessons);
    this.memberService.getMembers().subscribe(members => this.members = members);
    this.teacherService.getTeachers().subscribe(teachers => this.teachers = teachers);
    this.newPlaningFormData = new FormGroup({
      lessonId: new FormControl("", Validators.compose([
        Validators.required
      ])),
      teacherId: new FormControl("", Validators.compose([
        Validators.required
      ])),
      memberId: new FormControl("", Validators.compose([
        Validators.required
      ])),
      note: new FormControl("", Validators.compose([
        Validators.required
      ])),
    });
    //this.completePlaningsTable();
  }
}
