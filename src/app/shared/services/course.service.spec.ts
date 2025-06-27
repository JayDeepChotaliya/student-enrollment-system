import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;
  const mockUrl = 'http://localhost:8080/api/courses';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch all courses', () => {
    const mockCourses: Course[] = [
      { id: 1, title: 'Java Basics', description: 'Intro to Java' },
      { id: 2, title: 'Spring Boot', description: 'Spring Boot deep dive' }
    ];

    service.getCourses().subscribe(data => {
      expect(data.length).toBe(2);
      expect(data).toEqual(mockCourses);
    });

    const req = httpMock.expectOne(`${mockUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  
});
