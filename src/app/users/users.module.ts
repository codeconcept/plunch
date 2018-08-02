import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginContainerComponent } from './containers/login-container/login-container.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, LoginContainerComponent],
  exports: [LoginContainerComponent]
})
export class UsersModule { }
