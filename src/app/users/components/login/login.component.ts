import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  @Output() login = new EventEmitter<User>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      pseudo: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  loginUser(form: FormGroup) {
    if(form.valid) {
      const user = {pseudo: form.value.pseudo, email: form.value.email, password: form.value.password};
      console.log(user);
      this.login.emit(user);
      form.reset();
    }
  }
}
