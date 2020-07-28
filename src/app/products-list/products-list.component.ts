import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

}
