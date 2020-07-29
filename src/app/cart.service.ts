import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NotificationService } from './notification.service';
import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private notificationService: NotificationService) { }

  getProducts(): Observable<Product[]> {
    // testing notifications
    this.notificationService.add('Products Loaded');
    return of(PRODUCTS);
  }
}
