import { Action } from "@ngrx/store";
import { AircraftsActions, AircraftsActionsTypes } from "./aircrafts.actions";
import { AircraftsState, AircraftsStateEnum, initState } from "./aircrafts.state";

export function AircraftsReducer(state : AircraftsState = initState, action:Action) {
    switch(action.type){
        //all
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS:
            console.log("loading...");
            return {...state, dataState:AircraftsStateEnum.LOADING }

        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS:
            return {...state, dataState:AircraftsStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload}

        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR:
            return {...state,dataState:AircraftsStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}

//deisigned
            case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS:
                console.log("loading...");
                return {...state, dataState:AircraftsStateEnum.LOADING }
    
            case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS:
                return {...state, dataState:AircraftsStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload}
    
            case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR:
                return {...state,dataState:AircraftsStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}

                //construct
                case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS:
                    console.log("loading...");
                    return {...state, dataState:AircraftsStateEnum.LOADING }
        
                case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_SUCCESS:
                    return {...state, dataState:AircraftsStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload}
        
                case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_ERROR:
                    return {...state,dataState:AircraftsStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}

                    //search
                    case AircraftsActionsTypes.SEARCH_AIRCRAFTS:
                        console.log("loading...");
                        return {...state, dataState:AircraftsStateEnum.LOADING }
            
                    case AircraftsActionsTypes.SEARCH_AIRCRAFTS_SUCCESS:
                        return {...state, dataState:AircraftsStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload}
            
                    case AircraftsActionsTypes.SEARCH_AIRCRAFTS_ERROR:
                        return {...state,dataState:AircraftsStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload}
            
        default :
            return {...state}
            
    }
}