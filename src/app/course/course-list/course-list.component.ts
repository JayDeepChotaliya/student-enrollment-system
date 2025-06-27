import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/models/course.model';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data: Course[]) => {
      this.courses = data;
    });
  }

}
