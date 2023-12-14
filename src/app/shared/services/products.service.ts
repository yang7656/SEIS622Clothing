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
            serialNumber: "hoodie_black.png",
            name: "Black Hoodie",
            price: 20,
            imageUrl: '/assets/images/products/hoodie_black.png'
        }
            ,
        {
            serialNumber: "hoodie_gray.png",
            name: "Gray Hoodie 1",
            price: 20,
            imageUrl: '/assets/images/products/hoodie_gray.png'
        }
            ,
        {
            serialNumber: "hoodie_gray.png",
            name: "Gray Hoodie 2",
            price: 20,
            imageUrl: '/assets/images/products/hoodie_gray.png'
        }
            ,
        {
            serialNumber: "hoodie_purple.png",
            name: "Purple Hoodie",
            price: 20,
            imageUrl: '/assets/images/products/hoodie_purple.png'
        }
            ,
        {
            serialNumber: "hoodie_red.png",
            name: "Red Hoodie",
            price: 20,
            imageUrl: '/assets/images/products/hoodie_red.png'
        }
            ,
        {
            serialNumber: "hoodie_yellow.png",
            name: "Yellow Hoodie",
            price: 20,
            imageUrl: '/assets/images/products/hoodie_yellow.png'
        },
        {
            serialNumber: "jacket_blue.png",
            name: "Blue Jacket",
            price: 30,
            imageUrl: '/assets/images/products/jacket_blue.png'
        }
            ,
        {
            serialNumber: "jacket_gray.png",
            name: "Gray Jacket",
            price: 30,
            imageUrl: '/assets/images/products/jacket_gray.png'
        }
            ,
        {
            serialNumber: "jacket_green.png",
            name: "Green Jacket",
            price: 30,
            imageUrl: '/assets/images/products/jacket_green.png'
        }
            ,
        {
            serialNumber: "jacket_purple.png",
            name: "Purple Jacket",
            price: 30,
            imageUrl: '/assets/images/products/jacket_purple.png'
        }
            ,
        {
            serialNumber: "jacket_white.png",
            name: "White Jacket",
            price: 30,
            imageUrl: '/assets/images/products/jacket_white.png'
        }
            ,
        {
            serialNumber: "jacket_yellow.png",
            name: "Yellow Jacket",
            price: 30,
            imageUrl: '/assets/images/products/jacket_yellow.png'
        }
            ,
        {
            serialNumber: "tanktop_black.png",
            name: "Black Tanktop",
            price: 10,
            imageUrl: '/assets/images/products/tanktop_black.png'
        }
            ,
        {
            serialNumber: "tanktop_blue.png",
            name: "Blue Tanktop",
            price: 10,
            imageUrl: '/assets/images/products/tanktop_blue.png'
        }
            ,
        {
            serialNumber: "tanktop_green.png",
            name: "Green Tanktop",
            price: 10,
            imageUrl: '/assets/images/products/tanktop_green.png'
        }
            ,
        {
            serialNumber: "tanktop_purple.png",
            name: "Purple Tanktop",
            price: 10,
            imageUrl: '/assets/images/products/tanktop_purple.png'
        }
            ,
        {
            serialNumber: "tanktop_yellow.png",
            name: "Yellow Tanktop",
            price: 10,
            imageUrl: '/assets/images/products/tanktop_yellow.png'
        }
            ,
        {
            serialNumber: "tanktop_yellow.png",
            name: "Yellow Tanktop",
            price: 10,
            imageUrl: '/assets/images/products/tanktop_yellow.png'
        }
            ,
        {
            serialNumber: "tshirt_black.png",
            name: "Black T-Shirt 1",
            price: 5,
            imageUrl: '/assets/images/products/tshirt_black.png'
        }
            ,
        {
            serialNumber: "tshirt_black.png",
            name: "Black T-Shirt 2",
            price: 5,
            imageUrl: '/assets/images/products/tshirt_black.png'
        }
            ,
        {
            serialNumber: "tshirt_blue.png",
            name: "Blue T-Shirt",
            price: 5,
            imageUrl: '/assets/images/products/tshirt_blue.png'
        }
            ,
        {
            serialNumber: "tshirt_green.png",
            name: "Green T-Shirt",
            price: 5,
            imageUrl: '/assets/images/products/tshirt_green.png'
        }
            ,
        {
            serialNumber: "tshirt_orange.png",
            name: "Orange T-Shirt",
            price: 5,
            imageUrl: '/assets/images/products/tshirt_orange.png'
        }
            ,
        {
            serialNumber: "tshirt_pink.png",
            name: "Pink T-Shirt",
            price: 5,
            imageUrl: '/assets/images/products/tshirt_pink.png'
        }
        ]
    }
}