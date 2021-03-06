import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications: string[] = [];

  constructor() { }

  // tslint:disable-next-line: typedef
  add(productName: string) {
    this.notifications.push(productName + ' added to cart');
    setTimeout(() => {
      this.notifications.shift();
    }, 1500);
  }
}
