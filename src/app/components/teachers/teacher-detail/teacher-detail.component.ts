import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Teacher } from "../../../models/teacher";
import { TeacherService } from "../../../services/teacher.service";

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  teacher : Teacher;

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTeacher();
  }

  getTeacher(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teacherService.getTeacher(id).subscribe(teacher => this.teacher = teacher);
  }

  save(): void {
    this.teacherService.updateTeacher(this.teacher).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
