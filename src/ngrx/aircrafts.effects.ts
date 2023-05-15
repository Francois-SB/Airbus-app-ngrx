import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { AircraftService } from "src/app/services/aircraft.service";
import { AircraftsActionsTypes, GetAllAircraftsActionError, GetAllAircraftsActionSuccess, GetDesignedAircraftsActionError, GetDesignedAircraftsActionSuccess, GetDevelopmentAircraftsActionError, GetDevelopmentAircraftsActionSuccess, SearchAircraftsActionError, SearchAircraftsActionSuccess } from "./aircrafts.actions";




@Injectable()
export class AircraftsEffects {
    constructor(private aircraftService: AircraftService, private effectActions: Actions) { }


    getAllAircraftsEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_ALL_AIRCRAFTS),
            mergeMap((action) => {
                return this.aircraftService.getAircrafts().pipe(
                    map((aircrafts) => new GetAllAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetAllAircraftsActionError(err.message)))
                )
            })
        )
    );

    getDesignedAircraftsEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS),
            mergeMap((action) => {
                return this.aircraftService.getDesignedAircrafts().pipe(
                    map((aircrafts) => new GetDesignedAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetDesignedAircraftsActionError(err.message)))
                )
            })
        )
    );

    getDevelopmentAircraftsEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS),
            mergeMap((action) => {
                return this.aircraftService.getDeveloppementAircrafts().pipe(
                    map((aircrafts) => new GetDevelopmentAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetDevelopmentAircraftsActionError(err.message)))
                )
            })
        )
    );

    searchAircraftsEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.SEARCH_AIRCRAFTS),
            mergeMap((action) => {
                return this.aircraftService.getDeveloppementAircrafts().pipe(//getAircraftsByMsn
                    map((aircrafts) => new SearchAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new SearchAircraftsActionError(err.message)))
                )
            })
        )
    );
}