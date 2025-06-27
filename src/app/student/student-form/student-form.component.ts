import { Component } from '@angular/core';
import { Student } from 'src/app/shared/models/student.model';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  student: Student = {name:'', email:''};
  submitted = false;

  constructor(private studentService: StudentService) {}

  onSubmit():void{
    this.studentService.createStudent(this.student).subscribe(()=>{
    this.submitted=true;
    this.student={name:'',email:''}});
  }


}
