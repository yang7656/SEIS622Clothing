import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtHelperService } from '@auth0/angular-jwt';

//Key for local storage
export const LOCALSTORAGE_TOKEN_KEY = 'access_token';

//tokenGetter function for JwtModule
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PublicModule, 
    SharedModule, 
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:8000']
      }
    })
  ],
  exports: [AppRoutingModule],
  providers: [JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }