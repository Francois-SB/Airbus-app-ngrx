import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {
@Output() eventEmitter : EventEmitter<any> = new EventEmitter();

constructor(){}

ngOnInit(): void {
}
  getAllAircrafts(){
    this.eventEmitter.emit("ALL_AIRCRAFTS");
  }
  getDesignedAircrafts(){
    this.eventEmitter.emit("DESIGNED_AIRCRAFTS");
  }
  getDevelopmentAircrafts(){
    this.eventEmitter.emit("DEVELOPMENT_AIRCRAFTS");
  }
}
