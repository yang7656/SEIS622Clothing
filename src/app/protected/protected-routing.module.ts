import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { MyAccountComponent } from './myaccount/myaccount.component';
import { SafeshoppingComponent } from './safeshopping/safeshopping.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'myaccount', component: MyAccountComponent },
  { path: 'checkout',  component: CheckoutComponent  },
  { path: 'cart', component: CartComponent },
  { path: 'shopping', component: SafeshoppingComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
