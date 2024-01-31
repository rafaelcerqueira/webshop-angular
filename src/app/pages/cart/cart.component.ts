import { Component } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  cart: Cart = { items: [{
    product: 'https://via.placeholder.com/150',
    name: 'Test Product 1',
    price: 100,
    quantity: 1,
    id: 1
  },
  {
    product: 'https://via.placeholder.com/150',
    name: 'Test Product 1',
    price: 150,
    quantity: 1,
    id: 2
  },
  {
    product: 'https://via.placeholder.com/150',
    name: 'Test Product 1',
    price: 90,
    quantity: 1,
    id: 3
  }]};
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product', 
    'name', 
    'price', 
    'quantity',
    'total', 
    'actions'
  ];

  constructor() {}

  ngOnInit() {
    this.dataSource = this.cart.items;
  }

  getTotalCost(items: Array<CartItem>): number {
    
    return items.
      map((item) => item.price * item.quantity).reduce((prev, current) => prev + current, 0);
  }

}
