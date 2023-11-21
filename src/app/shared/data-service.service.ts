import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IMenuItem } from '../models/menu-item';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { JsonSourceFile } from 'typescript';

@Injectable({
  providedIn: 'root' //creates a Singleton service
})

export class DataService implements OnInit {
  [x: string]: any;
  static http: HttpClient;

  constructor( private http: HttpClient) {
    DataService.http = http;
  }

  ngOnInit(): void {
    this['dataUrl'] = TopMenuComponent.getDataUrl();
    this.http.get(this['dataUrl']).subscribe(data => { //Error: Cannot read properties of undefined (reading 'dataUrl')
      this['mapMenu'](data);
    });
  }

  // Read data from JSON file
  static getData(dataUrl: string): Observable<any> {
    return this.http.get<any>(dataUrl).pipe(
      catchError(this.handleError<any>('getData'))
    );
  }

  // Read menu data from JSON file, return IMenuItem
  static getMenu(dataUrl: string): Observable<IMenuItem> {
    return this.http.get<IMenuItem>(dataUrl).pipe(
      catchError(this.handleError<IMenuItem>('getMenu'))
    );
  }

  // Write data to JSON file
  writeData(data: any): Observable<any> {
    return of({ success: true, message: 'Data updated successfully.' });
  }

  // Handle errors
  static  handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  } 
}