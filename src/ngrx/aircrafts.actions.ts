import { Action } from "@ngrx/store";
import { Aircraft } from "src/app/models/aircraft.model";

export enum AircraftsActionsTypes{
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get All Aircrafts Success",
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get All Aircrafts Error",
}

export class GetAllAircraftsAction implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS;
    constructor(public payload:any) {
    }
}
export class GetAllAircraftsActionSuccess implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]){
    }
}
export class GetAllAircraftsActionError implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR;
    constructor(public payload:string) {
    }
}

export type AircraftsActions = GetAllAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError;