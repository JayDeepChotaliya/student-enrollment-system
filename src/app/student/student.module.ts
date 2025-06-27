import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentFormComponent } from './student-form/student-form.component';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule
  ]
})
export class StudentModule { }
