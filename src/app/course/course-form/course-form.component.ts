import { Component } from '@angular/core';
import { Course } from 'src/app/shared/models/course.model';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent 
{
  course: Course = { title: '', description: '' };
  submitted = false;

  constructor(private courseService: CourseService) {}

  onSubmit(): void {
    this.courseService.createCourse(this.course).subscribe(() => {
      this.submitted = true;
      this.course = { title: '', description: '' };
    });
  }
}
