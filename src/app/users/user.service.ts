import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersChoicesURL = 'http://localhost:4201/api/v1/users-choices';
  
  constructor(private http: HttpClient) {}

  
  getUsersChoices() {
    console.log('into getUsersChoices');
    // TODO
  }

  handleError(error): Observable<never> {
    return throwError(error.error.message);
  }
}