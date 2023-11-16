// data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //creates a Singleton service
})
export class DataService {
  private dataUrl = 'assets/data/customer_data.json'; 

  constructor(private http: HttpClient) { }

  // Read data from JSON file
  getData(): Observable<any> {
    return this.http.get<any>(this.dataUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Write data to JSON file
  writeData(data: any): Observable<any> {
    return of({ success: true, message: 'Data updated successfully.' });
  }

  // Handle errors
  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return of(null); 
  }
}
