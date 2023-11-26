import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../../node-rest-api/serve';

@Component
({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.scss']
})
export class NewArrivalComponent implements OnInit 
{
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