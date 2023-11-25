import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'http://localhost:3000/images';

  constructor(private http: HttpClient) { }

  getImages(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
