import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseFormComponent } from './course/course-form/course-form.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { EnrollmentFormComponent } from './enrollment/enrollment-form/enrollment-form.component';
import { EnrollmentListComponent } from './enrollment/enrollment-list/enrollment-list.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { StudentListComponent } from './student/student-list/student-list.component';

const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'students/add', component: StudentFormComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/add', component: CourseFormComponent },
  { path: 'enrollments', component: EnrollmentListComponent },
  { path: 'enrollments/add', component: EnrollmentFormComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' } // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
