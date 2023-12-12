import { Injectable } from "@angular/core";
import { Product } from 'src/app/models/IProduct';
@Injectable({
    providedIn: 'root'
})
export class ProductsService {


    constructor() { }

    getProductbySerialNumber(serialNumber: string): Product {
        return this.getAll().find(product => product.serialNumber==serialNumber)!;
    }

    getAll(): Product[] {
        return [{
            serialNumber: "hoodie_black_ff1.png",
            name: "Black Hoodie",
            price: 20,
            imageUrl: '/assets/images/products/hoodie_black_ff1.png'
        }
            ,
        {
            serialNumber: "hoodie_gray_dm1.png",
            name: "Gray Hoodie 1",
            price: 20,
            imageUrl: '/assets/images/products/hoodie_gray_dm1.png'
        }
            ,
        {
            serialNumber: "hoodie_gray_ff1.png",
            name: "Gray Hoodie 2",
            price: 20,
            imageUrl: '/assets/images/products/hoodie_gray_ff1.png'
        }
            ,
        {
            serialNumber: "hoodie_purple_dm1.png",
            name: "Purple Hoodie",
            price: 20,
            imageUrl: '/assets/images/products/hoodie_purple_dm1.png'
        }
            ,
        {
            serialNumber: "hoodie_red_ff1.png",
            name: "Red Hoodie",
            price: 20,
            imageUrl: '/assets/images/products/hoodie_red_ff1.png'
        }
            ,
        {
            serialNumber: "hoodie_yellow_dm1.png",
            name: "Yellow Hoodie",
            price: 20,
            imageUrl: '/assets/images/products/hoodie_yellow_dm1.png'
        },
        {
            serialNumber: "jacket_blue_ms1.png",
            name: "Blue Jacket",
            price: 30,
            imageUrl: '/assets/images/products/jacket_blue_ms1.png'
        }
            ,
        {
            serialNumber: "jacket_gray_ms1.png",
            name: "Gray Jacket",
            price: 30,
            imageUrl: '/assets/images/products/jacket_gray_ms1.png'
        }
            ,
        {
            serialNumber: "jacket_green_sl1.png",
            name: "Green Jacket",
            price: 30,
            imageUrl: '/assets/images/products/jacket_green_sl1.png'
        }
            ,
        {
            serialNumber: "jacket_purple_sl1.png",
            name: "Purple Jacket",
            price: 30,
            imageUrl: '/assets/images/products/jacket_purple_sl1.png'
        }
            ,
        {
            serialNumber: "jacket_white_ms1.png",
            name: "White Jacket",
            price: 30,
            imageUrl: '/assets/images/products/jacket_white_ms1.png'
        }
            ,
        {
            serialNumber: "jacket_yellow_sl1.png",
            name: "Yellow Jacket",
            price: 30,
            imageUrl: '/assets/images/products/jacket_yellow_sl1.png'
        }
            ,
        {
            serialNumber: "tanktop_black_zs1.png",
            name: "Black Tanktop",
            price: 10,
            imageUrl: '/assets/images/products/tanktop_black_zs1.png'
        }
            ,
        {
            serialNumber: "tanktop_blue_wbb1.png",
            name: "Blue Tanktop",
            price: 10,
            imageUrl: '/assets/images/products/tanktop_blue_wbb1.png'
        }
            ,
        {
            serialNumber: "tanktop_green_wbb1.png",
            name: "Green Tanktop",
            price: 10,
            imageUrl: '/assets/images/products/tanktop_green_wbb1.png'
        }
            ,
        {
            serialNumber: "tanktop_purple_zs1.png",
            name: "Purple Tanktop",
            price: 10,
            imageUrl: '/assets/images/products/tanktop_purple_zs1.png'
        }
            ,
        {
            serialNumber: "tanktop_yellow_wbb1.png",
            name: "Yellow Tanktop",
            price: 10,
            imageUrl: '/assets/images/products/tanktop_yellow_wbb1.png'
        }
            ,
        {
            serialNumber: "tanktop_yellow_zs1.png",
            name: "Yellow Tanktop",
            price: 10,
            imageUrl: '/assets/images/products/tanktop_yellow_zs1.png'
        }
            ,
        {
            serialNumber: "tshirt_black_cs1.png",
            name: "Black T-Shirt 1",
            price: 5,
            imageUrl: '/assets/images/products/tshirt_black_cs1.png'
        }
            ,
        {
            serialNumber: "tshirt_black_gc1.png",
            name: "Black T-Shirt 2",
            price: 5,
            imageUrl: '/assets/images/products/tshirt_black_gc1.png'
        }
            ,
        {
            serialNumber: "tshirt_blue_gc1.png",
            name: "Blue T-Shirt",
            price: 5,
            imageUrl: '/assets/images/products/tshirt_blue_gc1.png'
        }
            ,
        {
            serialNumber: "tshirt_green_cs1.png",
            name: "Green T-Shirt",
            price: 5,
            imageUrl: '/assets/images/products/tshirt_green_cs1.png'
        }
            ,
        {
            serialNumber: "tshirt_orange_cs1.png",
            name: "Orange T-Shirt",
            price: 5,
            imageUrl: '/assets/images/products/tshirt_orange_cs1.png'
        }
            ,
        {
            serialNumber: "tshirt_pink_gc1.png",
            name: "Pink T-Shirt",
            price: 5,
            imageUrl: '/assets/images/products/tshirt_pink_gc1.png'
        }
        ]
    }
}