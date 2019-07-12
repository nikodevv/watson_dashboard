import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts-x';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HobbyPopularityGraphComponent } from './hobby-popularity-graph/hobby-popularity-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HobbyPopularityGraphComponent
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
