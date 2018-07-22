import { Injectable } from '@angular/core';
import  "rxjs/Rx" ;
import {Subject} from "rxjs/Subject" ;

import {BehaviorSubject} from "rxjs/BehaviorSubject" ;

import {HttpClient} from '@angular/common/http';
@Injectable()
export class ApiService {

	//public mySubject :Subject<any> = new Subject<any>();

	//public behaviorSub = new BehaviorSubject("aa");


  constructor(private httpClient : HttpClient) { }

  getAllDoctors(){
    return this.httpClient.get('https://native-villagers-service.herokuapp.com/doctors') ;
  }
  //https://native-villagers-service.herokuapp.com/patients
  addPatient(data){
    return this.httpClient.post('https://native-villagers-service.herokuapp.com/patient',data) ;
  }

 /* getPatients(){
  	return this.httpClient.get('http://localhost:8080/patients') ;
  }

   getDoctors(){
  	return this.httpClient.get('http://localhost:8080/doctors') ;
  }

   savePatient(data){
  	return  this.httpClient.post('http://localhost:8080/patient',data) ;
  }*/

  /*getPatientSub(){
  return this.behaviorSub.next("b");
  }*/

}
