import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NotificationService } from './notification.service';
import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private addedProducts: Product[] = [];
  private totalPrice = 0;

  constructor(private notificationService: NotificationService) { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  addToCart(product: Product): void {
    console.log(this.addedProducts);
    let added = false;
    this.addedProducts.forEach( (p) => {
      if (p.id === product.id) {
        p.unit += 1;
        added = true;
        return;
      }
    });
    if (!added) {
      this.addedProducts.push(product);
    }
    this.calculateTotalPrice();
    this.notificationService.add(product.name);
  }

  getCartProducts(): Observable<Product[]> {
    return of(this.addedProducts);
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }

  incrementUnit(product: Product): void {
    product.unit += 1;
  }

  decrementUnit(product: Product): void {
    product.unit -= 1;
  }

  calculateTotalPrice(): void {
    this.totalPrice = 0;
    this.addedProducts.forEach( (product) => {
      this.totalPrice += (product.unit * product.price);
    });
  }

  clearCart(): void {
    this.addedProducts = [];
  }
}
