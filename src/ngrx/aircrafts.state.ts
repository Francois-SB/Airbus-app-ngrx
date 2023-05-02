import { Aircraft } from "src/app/models/aircraft.model"

export enum AircraftsStateEnum{
    LOADING = "LOADING",
    LOADED = "Loaded",
    ERROR = "Error",
    INITIAL = "Initial"
}
export interface AircraftsState {
    aircrafts : Aircraft[],
    dataState : AircraftsStateEnum,
    errorMessage:string
}

export const initState : AircraftsState = {
    aircrafts : [],
    dataState : AircraftsStateEnum.INITIAL,
    errorMessage: ""
}