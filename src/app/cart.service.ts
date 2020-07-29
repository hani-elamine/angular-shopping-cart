import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { NotificationService } from './notification.service';
import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private addedProducts: Product[] = [];
  private totalPrice$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private notificationService: NotificationService) { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  addToCart(product: Product): void {
    this.notificationService.add(product.name);

    if (this.addedProducts.indexOf(product) !== -1) {
      product.unit += 1;
      this.calculateTotalPrice();
      return;
    }
    this.addedProducts.push(product);
    this.calculateTotalPrice();
  }

  removeFromCart(product: Product): void {
    const index: number = this.addedProducts.indexOf(product);
    this.addedProducts.splice(index, 1);
    this.calculateTotalPrice();
  }

  getCartProducts(): Observable<Product[]> {
    return of(this.addedProducts);
  }

  getTotalPrice(): Observable<number> {
    return this.totalPrice$.asObservable();
  }

  incrementUnit(product: Product): void {
    product.unit += 1;
    this.calculateTotalPrice();
  }

  decrementUnit(product: Product): void {
    if (product.unit === 1) {
      this.removeFromCart(product);
      return;
    }
    product.unit -= 1;
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    let price = 0;
    this.addedProducts.forEach( (product) => {
      price += (product.unit * product.price);
    });
    this.totalPrice$.next(price);
  }

  clearCart(): void {
    this.addedProducts = [];
  }
}
