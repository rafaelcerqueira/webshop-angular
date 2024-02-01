import { CartService } from './../../services/cart.service';
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

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = _cart.items;
    })
  }

  getTotalCost(items: Array<CartItem>): number {
    
    return this.cartService.getTotalCost(items);
  }

}
