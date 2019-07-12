import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts-x';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HobbyPopularityGraphComponent } from './hobby-popularity-graph/hobby-popularity-graph.component';
import {DataService} from '../services/DataService';
import { UsersTimeGraphComponent } from './users-time-graph/users-time-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HobbyPopularityGraphComponent,
    UsersTimeGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
