import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule, 
    MatButtonModule,
    AppModule
  ]
})
export class ProtectedModule { }