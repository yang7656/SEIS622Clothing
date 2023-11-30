import { Component } from '@angular/core';
import { ImageService } from '../../../../node-rest-api/serve';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent implements OnInit {
  products: string[] = [];

  constructor(private imageService: ImageService) {}
  
  ngOnInit(): void 
  {
    this.imageService.getImages().subscribe((data: any) => {
      this.products = data;
      console.log(this.products[0].split('_')[2].toUpperCase().substring(0, 3));
    });
  }
}
