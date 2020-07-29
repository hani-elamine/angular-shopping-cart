import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications: string[] = [];

  constructor() { }

  // tslint:disable-next-line: typedef
  add(notification: string) {
    this.notifications.push(notification);
  }

  // tslint:disable-next-line: typedef
  clear() {
    this.notifications = [];
  }
}
