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
    console.log("getAircrafts");
    
    /* let host = Math.random() > 0.5 ? environment.host : environment.unreachableHost; */
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts");
  }

  
  public getDesignedAircrafts():Observable<Aircraft[]> {
    console.log("getDesignedAircrafts");
    
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts?design=true");
  }

  
  public getDeveloppementAircrafts():Observable<Aircraft[]> {
    console.log("getDeveloppementAircrafts");
    
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts?development=true");
  }

  
  public getAircraftsByMsn(id:number):Observable<Aircraft> {
    console.log("getAircraftsByMsn");
    
    return this.http.get<Aircraft>(environment.host + "/aircrafts/" + id);
  }

  public getAircraftsByProgSearch(payload:any):Observable<Aircraft[]> {
    console.log("searchService"+payload);
    let searchString = <String> payload;
    console.log("searchString  "+ searchString);
    
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts?prog_like=" + payload);
  }
}
