import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];
  totalPrice = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartProducts();
    this.getTotalPrice();
  }

  getCartProducts(): void {
    this.cartService.getCartProducts()
      .subscribe(products => this.cartProducts = products);
  }

  getTotalPrice(): void {
    this.cartService.getTotalPrice()
        .subscribe( total => this.totalPrice = total);
  }

  incrementUnit(product: Product): void {
    this.cartService.incrementUnit(product);
  }

  decrementUnit(product: Product): void {
    this.cartService.decrementUnit(product);
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
  }
}
