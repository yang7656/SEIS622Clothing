import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  showSuccess(message: string): void {
    console.log(`Success: ${message}`);
  }

  //Create notification logic to signify successful login, logout, etc.
  
}
