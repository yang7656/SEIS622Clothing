import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { ImageService } from '../../serve/serve';

@NgModule
({
  declarations: 
  [
    AppComponent,
    NewArrivalComponent
  ],
  imports: 
  [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
