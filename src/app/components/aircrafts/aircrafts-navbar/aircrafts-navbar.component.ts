import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AircraftsActionsTypes } from 'src/app/events/navbar.event';
import { GetAllAircraftsAction } from 'src/ngrx/aircrafts.actions';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {
@Output() eventEmitter : EventEmitter<any> = new EventEmitter();
myForm:FormGroup;
searchString:string="";

constructor(private store : Store<any>){
  let searchString = "";
  this.myForm=new FormGroup({
    search: new FormControl(searchString)
  })
}

ngOnInit(): void {
}
  getAllAircrafts(){
    this.store.dispatch(new GetAllAircraftsAction({}));
  }
  getDesignedAircrafts(){
    this.eventEmitter.emit({type : AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS , payload : null});
  }
  getDevelopmentAircrafts(){
    this.eventEmitter.emit({type : AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS , payload : null});
  }

  onSearch(form:FormGroup) {
    console.log("form.value.searchString"+form.value.searchString);
    
    this.eventEmitter.emit({type : AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS , payload : form.get('search')?.value})
  }
}
