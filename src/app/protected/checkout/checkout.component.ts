import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from "../../app.module";

@Component({
    selector: 'app-checkout',
    standalone: true,
    templateUrl: './checkout.component.html',
    styleUrl: './checkout.component.scss',
    imports: [CommonModule, AppModule]
})
export class CheckoutComponent {
  constructor() {}

}
