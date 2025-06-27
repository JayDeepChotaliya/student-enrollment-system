export interface Enrollment {
  id?: number;  // for response
  studentId: number;      // used in request
  courseId: number;       // used in request
  studentName?: string;   // shown in UI
  courseTitle?: string;    // shown in UI
}