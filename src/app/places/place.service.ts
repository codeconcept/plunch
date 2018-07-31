import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { Place } from './Place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private placesURL = 'http://localhost:4201/api/v1/places';
  
  constructor(private http: HttpClient) {}
  
  getPlaces(): Observable<Place[]> {
    console.log('into getPlaces');
    return this.http.get<Place[]>(this.placesURL)
      .pipe(
        tap(places => console.log('PlaceService getPlaces', places)),
        catchError(this.handleError)
      );
  }

  handleError(error): Observable<never> {
    return throwError(error.error.message);
  }
}