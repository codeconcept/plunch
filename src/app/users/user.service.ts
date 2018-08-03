import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { UserChoice } from './UserChoice';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersChoicesURL = 'http://localhost:4201/api/v1/users-choices';
  
  constructor(private http: HttpClient) {}

  makeChoice(userChoice: UserChoice) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<UserChoice>(this.usersChoicesURL, userChoice, { headers: headers })
      .pipe(
        tap(userChoice => console.log('UserChoice created', userChoice)),
        catchError(this.handleError)
      );
  }

  getUsersChoices() {
    console.log('into getUsersChoices');
    // TODO
    
  }

  handleError(error): Observable<never> {
    return throwError(error.error.message);
  }
}