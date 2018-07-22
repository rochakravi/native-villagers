import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DiaryComponent implements OnInit {
    
    //3. Constructor injected with the Service Dependency
    settings = {
        hideSubHeader : false ,
        actions : false , 
        
    columns: {
      month: {
        title: 'Month'
        
      },
      emi: {
        title: 'Emi'
      },
      bike: {
        title: 'Bike'
      },
      loan: {
        title: 'Ed.Loan'
      }
      ,
      mess: {
        title: 'Mess'
      },      
      saving: {
        title: 'Saving'
      },
      travelling: {
        title: 'Travelling',
        valuePrepareFunction : (value) => {
          
          return value;
        }
      },
      communication: {
        title: 'Communication'
      },
      personal: {
        title: 'Personal'
      },
      parents: {
        title: 'Parents'
      },      
      status: {
        title: 'Status'
      },
    }
  };
  
  data = [
    {
      month: "April - Rs.33808",
      emi: "Rs.3500",
      bike: "Rs.3000",
      loan: "Rs.3000",
      mess:"Rs.8000",      
      saving:"Rs.6000" ,
      travelling:"Rs.1000",
      communication:"Rs.1500",
      personal:"Rs.2000",
      parents: "Rs.2500",
      status : "+5300"
    },
    {
      month: "May - Rs.",
       emi: "Rs.3500",
      bike: "Rs.3000",
     loan: "Rs.3000",
     mess:"Rs.8000",      
      saving:"Rs.6000" ,
      travelling:"Rs.1000",
      communication:"Rs.1500",
      personal:"Rs.2000",
      parents: "Rs.25000",
      status : "+-"
    },{
      month: "June - Rs.",
      emi: "Rs.3500",
      bike: "Rs.3000",
     loan: "Rs.3000",
     mess:"Rs.8000",      
      saving:"Rs.6000" ,
      travelling:"Rs.1000",
      communication:"Rs.1500",
      personal:"Rs.2000",
      parents: "Rs.25000",
      status : "+-"
    },
  ];

     public goalCount ;

    constructor() {//private _router : Router
        
    }
    //4. Load all Employees
    ngOnInit() {
        this.goalCount = 40 ;
    }
    selectYear(){
        alert("value changed");
    }
    setStyle(){
        
        return 40 ;
    }
    /*selectedRow(event){
      alert(event.data);
    }*/
    userSelectedRow(event){
      sessionStorage.setItem('row', event.data);
      //this._router.navigate([/])
      alert(event.data.month);
    }



  
}