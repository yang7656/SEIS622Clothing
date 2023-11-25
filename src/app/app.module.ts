import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './public/top-menu/top-menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropdownMenuComponent } from './public/dropdown-menu/dropdown-menu.component';
import { MenuSearchComponent } from './public/menu-search/menu-search.component';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtModule } from '@auth0/angular-jwt';

//Key for local storage
export const LOCALSTORAGE_TOKEN_KEY = 'access_token';

//tokenGetter function for JwtModule
export function tokenGetter() {
  return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    DropdownMenuComponent,
    MenuSearchComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
          allowedDomains: ['localhost:8080'];
        }
      }
    }),

  ],
  providers: [ MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }