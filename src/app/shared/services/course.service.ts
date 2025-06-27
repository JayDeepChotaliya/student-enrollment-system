import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:8080/courses';

  constructor(private http: HttpClient ) { }

  getCourses() : Observable<Course[]>{
    return this.http.get<Course[]>(this.apiUrl)
  }

  createCourse(course: Course):Observable<any>
  {
    return this.http.post(this.apiUrl ,course); 
  }
}
