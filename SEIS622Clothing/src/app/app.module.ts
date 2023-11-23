import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';

@NgModule({
  declarations: [
    AppComponent,
    NewArrivalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
