import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StudentService } from './student.service';
import { Student } from '../models/student.model';



describe('StudentService', () => {
  let service: StudentService;
  let httpMock: HttpTestingController;
  const mockUrl = 'http://localhost:8080/api/students';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StudentService]
    });

    service = TestBed.inject(StudentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch all students', () => {
    const mockStudents: Student[] = [
      { id: 1, name: 'John', email: 'john@example.com' },
      { id: 2, name: 'Jane', email: 'jane@example.com' }
    ];

    service.getStudents().subscribe(data => {
      expect(data.length).toBe(2);
      expect(data).toEqual(mockStudents);
    });

    const req = httpMock.expectOne(`${mockUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockStudents);
  });

  
});
