import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard/auth.guard';

const routes: Routes = [
  { path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: 'protected', loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule) },
  { path: '', redirectTo: 'public', pathMatch: 'full' }, // Redirect empty path to 'public'
  { path: '**', redirectTo: 'public', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
