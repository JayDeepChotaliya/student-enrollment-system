import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enrollment } from '../models/enrollment.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private apiUrl = 'http://localhost:8080/enrollments';
  constructor(private http:HttpClient) { }

  getEnrollments(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.apiUrl);
  }

  createEnrollment(enrollment: Enrollment):Observable<any>
  {
    return this.http.post(this.apiUrl,enrollment);
  }

  updateEnrollment(id:number,enrollment:Enrollment):Observable<any>
  {
    return this.http.put(`${this.apiUrl}/$id`,enrollment);
  }

  deleteEnrollment(id:number):Observable<any>
  {
    return this.http.delete(`${this.apiUrl}/$id`);
  }
}
