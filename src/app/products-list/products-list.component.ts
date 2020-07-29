import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  addedProducts: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.cartService.getProducts()
      .subscribe(products => this.products = products);
  }

  incrementUnit(product: Product): void {
    product.unit += 1;
  }

  decrementUnit(product: Product): void {
    product.unit -= 1;
  }

  addToCart(product: Product): void {
    this.addedProducts.push(product);
  }
}
