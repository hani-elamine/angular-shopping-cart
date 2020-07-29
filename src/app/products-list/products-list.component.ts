import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  allProducts: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.cartService.getProducts()
      .subscribe(products => this.allProducts = products);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

}
