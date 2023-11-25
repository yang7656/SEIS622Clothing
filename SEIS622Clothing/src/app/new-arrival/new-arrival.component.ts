import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageService } from '../../../serve/serve';

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
    });
  }
}