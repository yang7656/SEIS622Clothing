import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { MenuSearchComponent } from './menu-search/menu-search.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedshopComponent } from './sharedshop/sharedshop.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DropdownMenuComponent,
    MenuSearchComponent,
    TopMenuComponent,
    SharedshopComponent,
    ProductPageComponent
  ],
  exports: [
    TopMenuComponent, 
    MenuSearchComponent, 
    DropdownMenuComponent,
    SharedshopComponent,
    ProductPageComponent,
    RouterModule
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
})
export class SharedModule {

}