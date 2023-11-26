import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from "../../app.module";

@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss',
    imports: [CommonModule, AppModule]
})
export class CartComponent {

}
