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
  products: any[] = [];

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void 
  {
    
  }
}