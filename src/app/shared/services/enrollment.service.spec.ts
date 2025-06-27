import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EnrollmentService } from './enrollment.service';
import { Enrollment } from '../models/enrollment.model';

describe('EnrollmentService', () => {
  let service: EnrollmentService;
  let httpMock: HttpTestingController;
  const mockUrl = 'http://localhost:8080/api/enrollments';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnrollmentService]
    });

    service = TestBed.inject(EnrollmentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch all enrollments', () => {
    const mockEnrollments: Enrollment[] = [
      { id: 1, studentId: 1, courseId: 1, studentName: 'John', courseTitle: 'Java' },
      { id: 2, studentId: 2, courseId: 2, studentName: 'Jane', courseTitle: 'Spring' }
    ];

    service.getEnrollments().subscribe(data => {
      expect(data.length).toBe(2);
      expect(data).toEqual(mockEnrollments);
    });

    const req = httpMock.expectOne(`${mockUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockEnrollments);
  });

  
});
