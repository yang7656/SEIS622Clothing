import { Component } from '@angular/core';
import { ImageService } from '../../../../node-rest-api/serve';
import { OnInit } from '@angular/core';

@Component({
  selector: 'sharedshop',
  templateUrl: './sharedshop.component.html',
  styleUrl: './sharedshop.component.scss'
})
export class SharedshopComponent implements OnInit{
  title = "SEIS-622 Northern Streetwear - From the Woods to the Pavement";
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
