import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/student.service'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


export interface PeriodicElement{
  studentName:string;
  studentAge:number
}

  const ELEMENT_DATA: PeriodicElement[] = [
    {studentName:'ahmed',studentAge:20}
  ]

  @Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss']
  })  
  
  export class StudentsComponent implements OnInit {
  ngOnInit(): void {
  }
  studentDetails ={
    studentName: '',
    studentAge: ''
  }



  constructor(private student: StudentService, private afs:AngularFirestoreModule) { }
  
  addStudent(){
    this.student.addStudent(this.studentDetails)
  }
  
  displayedColumns = ['Name','Age']
  dataSource = ELEMENT_DATA
  
  // dataSource  = new studentDataSource(this.student)
}
// export class studentDataSource extends DataSource<any> {
//   constructor(private student : StudentService){
//     super()
//   }
// connect(collectionViewer: CollectionViewer): Observable<any> {
//       return this.student.getStudents()
// }
//     disconnect(collectionViewer: CollectionViewer): void {
      
//     }
//   }