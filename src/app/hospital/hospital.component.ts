import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HospitalComponent implements OnInit {
	public allDoctors ;
	
	 showDoc : boolean = false ;
	 selectedDoct : boolean = false ;
	 doctorName ;
	 respREsult ;
	 baklu ;
	 doctorId ;
	 pName ;
	 apptment : boolean = true ;
	 apptmentID : boolean = false ;
	 PatId ;

   
  constructor(private api : ApiService) { 

  	

  }

  ngOnInit() {

  	this.api.getAllDoctors().subscribe(
  		result => {
  			this.allDoctors = result ;  		
  		})
  }

 
  choseDoc(){
  	this.showDoc = !this.showDoc ;
  }
  selectedDoc(name){
  
  	this.doctorName = name.doctorName ;
  	this.doctorId = name.doctorID ;
  
  	this.showDoc = !this.showDoc ;
  	this.selectedDoct = !this.selectedDoct ;

  }
  appointment(){


  	let data = {
    "patientName":this.pName,
    	"doctor": {
       		"doctorID": this.doctorId
    	}
	}

  		console.log(data);
  		this.api.addPatient(data).subscribe(

  			result => {
  				this.apptment = false ;
  				this.apptmentID = true ;
  				this.PatId = result["patientId"] ;
  			})
  	
  	}

}
