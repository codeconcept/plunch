import { Component, OnInit } from '@angular/core';
import { User } from '../../User';
import { Store } from '@ngrx/store';
import * as authActions from '../../../auth/state/auth.actions';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  loginUser(user: User) {
    this.store.dispatch(new authActions.Login(user));
  }

}
