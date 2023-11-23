import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { SigninPageComponent } from './signin-page/signin-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    TopMenuComponent,
    SigninPageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [ SigninComponent, SigninPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
