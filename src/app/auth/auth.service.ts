import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { User } from './../users/User';
import { Auth } from './Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signinURL = 'http://localhost:4201/api/v1/signin';
  private signoutURL = 'http://localhost:4201/api/v1/signout';
  
  constructor(private http: HttpClient) {}

  
  signIn(user: User): Observable<Auth> {
    console.log('into signIn');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Auth>(this.signinURL, user, { headers: headers })
      .pipe(
        tap(auth => console.log('AuthService signIn', auth)),
        catchError(this.handleError)
      );
  }

  signOut(): Observable<Auth> {
    console.log('into signOut');
    return this.http.get<Auth>(this.signoutURL)
      .pipe(
        tap(auth => console.log('AuthService signOut', auth)),
        catchError(this.handleError)
      );
  }

  handleError(error): Observable<never> {
    return throwError(error.error.message);
  }
}