import { Component, OnInit } from '@angular/core';
import { Enrollment } from 'src/app/shared/models/enrollment.model';
import { EnrollmentService } from 'src/app/shared/services/enrollment.service';

@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.css']
})
export class EnrollmentListComponent implements OnInit{
  enrollments: Enrollment[] = [];

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.enrollmentService.getEnrollments().subscribe(data => {
      this.enrollments = data;
    });
  }

}
