import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyAccountComponent } from './myaccount/myaccount.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    CheckoutComponent,
    MyAccountComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule, 
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProtectedModule { }