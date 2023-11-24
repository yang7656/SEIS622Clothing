import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component
({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.scss']
})
export class NewArrivalComponent implements OnInit 
{
  products: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void 
  {
    this.http.get<string[]>('assets/images.json').subscribe(data => {
      this.products = data;
    });
  }
}