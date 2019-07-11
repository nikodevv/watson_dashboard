import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HobbiesByTypeComponent } from './hobbies-by-type/hobbies-by-type.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HobbiesByTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
