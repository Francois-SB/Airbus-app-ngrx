import { Action } from "@ngrx/store";
import { Aircraft } from "src/app/models/aircraft.model";

export enum AircraftsActionsTypes{
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get All Aircrafts Success",
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get All Aircrafts Error",

    GET_DESIGNED_AIRCRAFTS = "[Aircrafts] Get Designed Aircrafts",
    GET_DESIGNED_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Designed Aircrafts Success",
    GET_DESIGNED_AIRCRAFTS_ERROR = "[Aircrafts] Get Designed Aircrafts Error",

    GET_DEVELOPMENT_AIRCRAFTS = "[Aircrafts] Get Development Aircrafts",
    GET_DEVELOPMENT_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Development Aircrafts Success",
    GET_DEVELOPMENT_AIRCRAFTS_ERROR = "[Aircrafts] Get Development Aircrafts Error",

    SEARCH_AIRCRAFTS = "[Aircrafts] sEARCH Aircrafts",
    SEARCH_AIRCRAFTS_SUCCESS = "[Aircrafts] search Aircrafts Success",
    SEARCH_AIRCRAFTS_ERROR = "[Aircrafts] search Aircrafts Error",
}

export class GetAllAircraftsAction implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS;
    constructor(public payload:any) {}
}
export class GetAllAircraftsActionSuccess implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]) {}
}
export class GetAllAircraftsActionError implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR;
    constructor(public payload:string) {}
}

export class GetDesignedAircraftsAction implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS;
    constructor(public payload:any) {}
}
export class GetDesignedAircraftsActionSuccess implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]) {}
}
export class GetDesignedAircraftsActionError implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR;
    constructor(public payload:string) {}
}

export class GetDevelopmentAircraftsAction implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS;
    constructor(public payload:any) {}
}
export class GetDevelopmentAircraftsActionSuccess implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]) {}
}
export class GetDevelopmentAircraftsActionError implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_ERROR;
    constructor(public payload:string) {}
}

export class SearchAircraftsAction implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.SEARCH_AIRCRAFTS;
    constructor(public payload:any) {}
}
export class SearchAircraftsActionSuccess implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.SEARCH_AIRCRAFTS_SUCCESS;
    constructor(public payload:Aircraft[]) {}
}
export class SearchAircraftsActionError implements Action{
    type: AircraftsActionsTypes = AircraftsActionsTypes.SEARCH_AIRCRAFTS_ERROR;
    constructor(public payload:string) {}
}

export type AircraftsActions = GetAllAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError |
GetDesignedAircraftsAction | GetDesignedAircraftsActionSuccess | GetDesignedAircraftsActionError |
GetDevelopmentAircraftsAction | GetDevelopmentAircraftsActionSuccess | GetDevelopmentAircraftsActionError |
SearchAircraftsAction | SearchAircraftsActionSuccess | SearchAircraftsActionError;