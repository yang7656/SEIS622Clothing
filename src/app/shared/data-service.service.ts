import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //creates a Singleton service
})

export class DataService  {
  [x: string]: any;
  static http: HttpClient; 

  constructor( private http: HttpClient) {
    DataService.http = http;
  }

  // Read data from JSON file
  static getData(dataUrl: string): Observable<any> {
    return this.http.get<any>(dataUrl).pipe(
      catchError(this.handleError<any>('getData'))
    );
  }

  // Write data to JSON file
  writeData(data: any): Observable<any> {
    return of({ success: true, message: 'Data updated successfully.' });
    //yet to implement
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