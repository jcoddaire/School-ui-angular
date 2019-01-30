import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './Courses/courses.component';
import { MessagesComponent } from './messages/messages.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { DepartmentsComponent } from './departments/departments.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentsComponent } from './students/students.component';
import { RegisterComponent } from './register/register.component';
import { FacultyDetailComponent } from './faculty-detail/faculty-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    MessagesComponent,
    SiteHeaderComponent,
    DepartmentsComponent,
    FacultyComponent,
    StudentsComponent,
    RegisterComponent,
    FacultyDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
