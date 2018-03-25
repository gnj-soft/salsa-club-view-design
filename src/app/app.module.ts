import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './components/messages/messages.component';

import { TeachersComponent } from './components/teachers/teachers.component';
import { TeacherDetailComponent } from './components/teachers/teacher-detail/teacher-detail.component';
import { MembersComponent } from './components/members/members.component';
import { MemberDetailComponent } from './components/members/member-detail/member-detail.component';
import { PlaningsComponent } from './components/planings/planings.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { LessonDetailComponent } from './components/lessons/lesson-detail/lesson-detail.component';
import { LoginComponent } from './components/login/login.component';
import { NewLoginComponent } from './components/login/new-login/new-login.component';

import { MessageService } from './services/message.service';
import { TeacherService } from "./services/teacher.service";
import { MemberService } from './services/member.service';
import { PlaningService } from './services/planing.service';
import { LessonService } from './services/lesson.service';
import { LoginService } from './services/login.service';

import { FirstCapitalLetterPipe } from './pipes/first-capital-letter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    TeacherDetailComponent,
    MessagesComponent,
    MembersComponent,
    MemberDetailComponent,
    PlaningsComponent,
    LessonsComponent,
    LessonDetailComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NewLoginComponent,
    FirstCapitalLetterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    TeacherService,
    MessageService,
    MemberService,
    PlaningService,
    LessonService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
