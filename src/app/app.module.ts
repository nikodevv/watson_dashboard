import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HobbiesByTypeComponent } from './hobbies-by-type/hobbies-by-type.component';
import { UsersOverTimeComponent } from './users-over-time/users-over-time.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HobbiesByTypeComponent,
    UsersOverTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
