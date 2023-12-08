import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingComponent } from './shopping/shopping.component';

// Routes for child Module (publicModule). Since public module is lazy loaded in the app-routing.module the full path is `/public/*`
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'protected/cart', loadChildren: () => import('../protected/protected.module').then(m => m.ProtectedModule) },
  { path: 'protected/myaccount', loadChildren: () => import('../protected/protected.module').then(m => m.ProtectedModule) },
  { path:'', component: ShoppingComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }