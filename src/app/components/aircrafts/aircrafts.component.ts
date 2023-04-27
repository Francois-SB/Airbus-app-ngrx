import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { ActionEvent, AircraftsActionsTypes } from 'src/app/events/navbar.event';
import { Aircraft } from 'src/app/models/aircraft.model';
import { AircraftService } from 'src/app/services/aircraft.service';
import { AppDataState, DataStateEnum } from 'src/app/states/aircraft.state';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {

  aircrafts$:Observable<AppDataState<Aircraft[]>> | null = null;
  readonly dataStateEnum = DataStateEnum;
  constructor(private aircraftService : AircraftService) { }

  ngOnInit(): void {
  }
onActionEvent($actionEvent : ActionEvent){
  switch($actionEvent.type){
    case AircraftsActionsTypes.GET_ALL_AIRCRAFTS : this.getAllAircrafts();
    break;
    case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS : this.getDesignedAircrafts();
    break;
    case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS : this.getDevelopmentAircrafts();
    break;
    case AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS : this.search($actionEvent.payload);
    break;
  }
}


  getAllAircrafts(){
    console.log("all");
    
    this.aircrafts$ = this.aircraftService.getAircrafts().pipe(
      map(data => ({dataState : DataStateEnum.LOADED, data : data})),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(err => of({dataState : DataStateEnum.ERROR, errorMessage : err.message}))
    )}

    getDesignedAircrafts(){
      console.log("des");
      
      this.aircrafts$ = this.aircraftService.getDesignedAircrafts().pipe(
        map(data => ({dataState : DataStateEnum.LOADED, data : data})),
        startWith({dataState : DataStateEnum.LOADING}),
        catchError(err => of({dataState : DataStateEnum.ERROR, errorMessage : err.message}))
    )}

    getDevelopmentAircrafts(){
      console.log("dev");
      
      this.aircrafts$ = this.aircraftService.getDeveloppementAircrafts().pipe(
        map(data => ({dataState : DataStateEnum.LOADED, data : data})),
        startWith({dataState : DataStateEnum.LOADING}),
        catchError(err => of({dataState : DataStateEnum.ERROR, errorMessage : err.message}))
    )}
  
    search(payload:any){
      console.log("search "+payload);
       this.aircrafts$ = this.aircraftService.getAircraftsByProgSearch(payload).pipe(
        map(data => ({dataState : DataStateEnum.LOADED, data : data})),
        startWith({dataState : DataStateEnum.LOADING}),
        catchError(err => of({dataState : DataStateEnum.ERROR, errorMessage : err.message}))
    ) 
    }
}
