import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { MenuSearchComponent } from './menu-search/menu-search.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';
import { NotificationService } from './services/notification.service';
import { SharedshopComponent } from './sharedshop/sharedshop.component';

@NgModule({
  declarations: [
    DropdownMenuComponent,
    MenuSearchComponent,
    TopMenuComponent,
    SharedshopComponent
    ],
  exports: [
    TopMenuComponent, 
    MenuSearchComponent, 
    DropdownMenuComponent,
    SharedshopComponent
  ],
  imports: [
    CommonModule, 
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,  
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
          allowedDomains: ['localhost:8000'];
        }
      }
    })
  ],
})
export class SharedModule {

}