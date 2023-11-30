import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';

//Key for local storage
export const LOCALSTORAGE_TOKEN_KEY = 'access_token';

//tokenGetter function for JwtModule
export function tokenGetter() {
  return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
}

@NgModule({
  declarations: [AppComponent],
  imports: [PublicModule, SharedModule],
  exports: [AppRoutingModule],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }