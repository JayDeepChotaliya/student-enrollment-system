import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Student } from '../models/student.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://localhost:8080/students';

  constructor(private http:HttpClient) { }

  getStudents(): Observable<Student[]>
  {
      return this.http.get<Student[]>(this.apiUrl);
  }

  createStudent(Student:Student): Observable<any>
  {
    return this.http.post(this.apiUrl, Student);
  }
}
