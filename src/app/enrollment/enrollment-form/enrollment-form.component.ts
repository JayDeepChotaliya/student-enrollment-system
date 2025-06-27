import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/models/course.model';
import { Enrollment } from 'src/app/shared/models/enrollment.model';
import { Student } from 'src/app/shared/models/student.model';
import { CourseService } from 'src/app/shared/services/course.service';
import { EnrollmentService } from 'src/app/shared/services/enrollment.service';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-enrollment-form',
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent implements OnInit{
  students: Student[] = [];
  courses: Course[] = [];
  enrollment: Enrollment = { studentId: 0, courseId: 0 };
  submitted = false;

  constructor(
    private studentService: StudentService,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => this.students = data);
    this.courseService.getCourses().subscribe(data => this.courses = data);
  }

  onSubmit(): void {
    this.enrollmentService.createEnrollment(this.enrollment).subscribe(() => {
      this.submitted = true;
      this.enrollment = { studentId: 0, courseId: 0 };
    });
  }

}
