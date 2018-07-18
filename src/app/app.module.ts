import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { MyOwnMaterialModule } from "./modules/my-own-material/my-own-material.module";

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
import { ConstantsService } from './services/constants.service';
import { InitDataService } from './services/init-data.service';
import { Interceptor } from './core/app.interceptor';
import { AuthService } from './services/auth.service';

import { FirstCapitalLetterPipe } from './pipes/first-capital-letter.pipe';
import { TokenStorage } from './core/token.storage';





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
    FirstCapitalLetterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [
    TeacherService,
    MessageService,
    MemberService,
    PlaningService,
    LessonService,
    LoginService,
    ConstantsService,
    InitDataService,
    AuthService,
    TokenStorage,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
