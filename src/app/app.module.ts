import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngrx
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { PlacesModule } from './places/places.module';
import { UsersModule } from './users/users.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'Plunch',
      maxAge: 15
    }),
    EffectsModule.forRoot([]),
    PlacesModule,
    UsersModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
