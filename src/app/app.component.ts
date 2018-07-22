
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
//import {Router} from "@angular/router";

@Component({ 
    selector: 'app-root',
    templateUrl: './app.component.html'
     })
 
export class AppComponent implements OnInit {

    tiles : boolean = false ;
   
    constructor(private _router : Router) {//private _router : Router
        
    }
 
    ngOnInit() {
        
    }
    redirect(navigation){
    	let redirect : string = "/"+navigation ; 
    	this._router.navigate([redirect]);
        this.tiles = false ;
    }
      
}