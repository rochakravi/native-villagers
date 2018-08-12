import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import{Routes, RouterModule} from '@angular/router' ;



//import { Ng2SmartTableModule } from 'ng2-smart-table';
//import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { DiaryComponent } from './diary/diary.component';
import { EventComponent } from './event/event.component';
import { DisplayBoardComponent } from './display-board/display-board.component';


import { ApiService } from './api.service';
import { HospitalComponent } from './hospital/hospital.component';


 const routes : Routes =[
 	{
		path : 'details',component:DetailsComponent
	},
  {
    path : 'events',component:EventComponent
  },
  {
    path : 'myDiary', component : DiaryComponent
  },
  {
    path : 'hospital',component:HospitalComponent
  }

]


@NgModule({
  declarations: [AppComponent, DetailsComponent, DiaryComponent, EventComponent, DisplayBoardComponent, HospitalComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

 
   
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
