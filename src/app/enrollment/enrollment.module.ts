import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EnrollmentRoutingModule } from './enrollment-routing.module';
import { EnrollmentListComponent } from './enrollment-list/enrollment-list.component';
import { EnrollmentFormComponent } from './enrollment-form/enrollment-form.component';


@NgModule({
  declarations: [
    EnrollmentListComponent,
    EnrollmentFormComponent
  ],
  imports: [
    CommonModule,
    EnrollmentRoutingModule,
    FormsModule
  ]
})
export class EnrollmentModule { }
