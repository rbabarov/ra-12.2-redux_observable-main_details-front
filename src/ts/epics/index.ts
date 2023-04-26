import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import {
  servicesRequest,
  servecesRequestSuccess,
  servicesDetailsRequest,
  serviceDetailsRequestSuccess,
  servicesRequestFailure,
} from '../slices/servicesSlice';
import { IService } from '../slices/servicesSlice'

export const servicesEpic = (action$: any) => action$.pipe(
  ofType(servicesRequest.type),
  switchMap(() => ajax.getJSON<IService[]>(`${process.env.REACT_APP_BASE_URL}`).pipe(
    map(o => servecesRequestSuccess({ services: o })),
    catchError(e => of(servicesRequestFailure({error: e})))
  )),
);

export const detailsEpic = (action$: any) => action$.pipe(
  ofType(servicesDetailsRequest.type),
  switchMap((o: {payload: {clickedID: string}}) => ajax.getJSON<IService>(`${process.env.REACT_APP_BASE_URL}/${o.payload.clickedID}`).pipe(
    map((o: IService) => serviceDetailsRequestSuccess({details: o})),
    catchError(e => of(servicesRequestFailure({error: e})))
  ))
)
