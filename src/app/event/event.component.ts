import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from './../api.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventComponent implements OnInit {

	public patientList : {};
	public doctorList : {};
	public DocDetails : boolean = false ;
  public allDoctors ;

  constructor(private apiService : ApiService) { }

  ngOnInit() {

    this.apiService.getAllDoctors().subscribe(
        result  => {
        this.allDoctors = result ;//
        //this.doctorList = this.patientList["doctor"]
        //console.log(this.patientList) ;
      })




  	/*this.apiService.getPatients().subscribe(
  		result  => {
  			this.patientList = result ;//
  			this.doctorList = this.patientList["doctor"]
  			console.log(this.patientList) ;
  		})

  	this.apiService.behaviorSub.next("b");

  	this.apiService.behaviorSub.subscribe(

  		 result => console.log(result)
  		)
  	this.apiService.behaviorSub.next("ccc");
  	this.apiService.behaviorSub.next("ddd");*/


  	
  }


  showDocDetails(event){
 	console.log(event);
 	//event.patientId ;
  	this.DocDetails = !this.DocDetails;
  }

}
