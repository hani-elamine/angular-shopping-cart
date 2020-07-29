import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NotificationService } from './notification.service';
import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];

  constructor(private notificationService: NotificationService) { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  addToCart(product: Product): void {
    this.products.push(product);
    this.notificationService.add('$(product.name) added to cart successfuly');
  }

  incrementUnit(product: Product): void {
    product.unit += 1;
  }

  decrementUnit(product: Product): void {
    product.unit -= 1;
  }

  clearCart(): void {
    this.products = [];
  }
}
