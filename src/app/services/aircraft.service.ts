import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Aircraft } from 'src/app/models/aircraft.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  constructor(private http:HttpClient) { }

  public getAircrafts():Observable<Aircraft[]> {
    /* let host = Math.random() > 0.5 ? environment.host : environment.unreachableHost; */
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts");
  }

  
  public getDesignedAircrafts():Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts?design=true");
  }

  
  public getDeveloppementAircrafts():Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts?development=true");
  }

  
  public getAircraftsByMsn(id:number):Observable<Aircraft> {
    return this.http.get<Aircraft>(environment.host + "/aircrafts/" + id);
  }
}
