export enum AircraftsActionsTypes {
    GET_ALL_AIRCRAFTS = "[Aircrafs] Get All Aircrafts",
    GET_DESIGNED_AIRCRAFTS = "[Aircrafs] Get Designed Aircrafts",
    GET_DEVELOPMENT_AIRCRAFTS = "[Aircrafs] Get Development Aircrafts",
    GET_SEARCH_AIRCRAFTS = "[Aircrafs] Get Search Aircrafts"
}

export interface ActionEvent {
    type : AircraftsActionsTypes,
    payload : any
}

