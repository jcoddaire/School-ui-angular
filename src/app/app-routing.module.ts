import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './Courses/courses.component';
import { DepartmentsComponent } from './departments/departments.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentsComponent } from './students/students.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' },
  { path: 'courses', component: CourseComponent},
  { path: 'departments', component: DepartmentsComponent},
  { path: 'faculty', component: FacultyComponent},
  { path: 'students', component: StudentsComponent},
  { path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
