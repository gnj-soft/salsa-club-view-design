import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeachersComponent } from "./components/teachers/teachers.component";
import { TeacherDetailComponent } from "./components/teachers/teacher-detail/teacher-detail.component";
import { MembersComponent } from "./components/members/members.component";
import { MemberDetailComponent } from "./components/members/member-detail/member-detail.component";
import { LessonsComponent } from './components/lessons/lessons.component';
import { PlaningsComponent } from './components/planings/planings.component';
import { LessonDetailComponent } from './components/lessons/lesson-detail/lesson-detail.component';

const routes: Routes = [
  { path: 'teachers', component: TeachersComponent },
  { path: 'members', component: MembersComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'planings', component: PlaningsComponent },
  { path: 'teacher-detail/:id', component: TeacherDetailComponent },
  { path: 'member-detail/:id', component: MemberDetailComponent },
  { path: 'lesson-detail/:id', component: LessonDetailComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
