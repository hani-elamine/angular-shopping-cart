import { Component, OnInit, Input } from '@angular/core';
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
    this.totalPrice = this.cartService.getTotalPrice();
  }

  incrementUnit(product: Product): void {
    this.cartService.incrementUnit(product);
    this.getTotalPrice();
  }

  decrementUnit(product: Product): void {
    this.cartService.decrementUnit(product);
    this.getTotalPrice();
  }

}
