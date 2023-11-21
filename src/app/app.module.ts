import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [ SigninComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
