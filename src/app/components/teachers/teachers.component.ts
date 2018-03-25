import { Component, OnInit } from '@angular/core';

import { Teacher } from '../../models/teacher';
import { TeacherService } from "../../services/teacher.service";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers: Teacher[];

  constructor(private teacherService: TeacherService) { }

  getTeachers(): void {
    this.teacherService.getTeachers().subscribe(teachers => this.teachers = teachers);
  }

  add(firstName: string, lastName: string, info: string): void {
    firstName = firstName.trim();
    lastName = lastName.trim();
    info = info.trim();
    if (!firstName || !lastName) { return; }
    if (!info) {
      info = "Note not available";
    }
    this.teacherService.addTeacher({ firstName, lastName, info } as Teacher )
      .subscribe(teacher => {
        this.teachers.push(teacher);
      });
  }

  delete(teacher: Teacher): void {
    this.teachers = this.teachers.filter(teach => teach !== teacher);
    this.teacherService.deleteTeacher(teacher).subscribe();
  }

  ngOnInit() {
    this.getTeachers();
  }
}
