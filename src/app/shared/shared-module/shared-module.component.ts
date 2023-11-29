import { Component } from '@angular/core';
import { ImageService } from '../../../../node-rest-api/serve';
import { OnInit } from '@angular/core';

@Component({
  selector: 'shared-module',
  templateUrl: './shared-module.component.html',
  styleUrl: './shared-module.component.scss'
})
export class SharedModuleComponent implements OnInit{
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
