 import { Component, OnInit, ViewEncapsulation } from '@angular/core';
 import {ApiService} from './../api.service' ;
 import  "rxjs/Rx" ;
 import 'rxjs/add/operator/map';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {

 parentMessage = "message from parent" ;

  /*langs: string[] = [
    'English',
    'French',
    'German',
  ];*/
  public langs: any[] ;

  //public doctorList : any[] = [];

    public doctorList : {};

    public data ;

  myform: FormGroup;

  constructor(private service : ApiService){}

  ngOnInit() {

  /*  this.service.getDoctors().subscribe(
      result => {       
        this.doctorList = result;
      })
*/
    this.myform = new FormGroup({
     /* name: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
      }),*/
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      language: new FormControl()
    });


   // this.checkValue();
  }

checkValue(){
  let patientId = this.myform.value.email ;
  let patientName = this.myform.value.email ;
  let doctorID = this.myform.value.email ; 

  this.data = {
        "patientId": this.myform.value.email,
        "patientName":this.myform.value.email,
        "doctor": {
            "doctorID":this.myform.value.email,            
        }
      }
}
SavePatient(){

  this.data = {
        "patientId": this.myform.value.email,
        "patientName":this.myform.value.email,
        "doctor": {
            "doctorID":this.myform.value.email,            
        }
      }

  /*this.service.savePatient(this.data).subscribe(
      result => {
        console.log(result);
      }
    );*/
}


}



