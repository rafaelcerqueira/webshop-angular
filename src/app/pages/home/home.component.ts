import { Product } from './../../models/product.model';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from 
'@angular/core';

const ROW_HEIGHT:{ [id: number]: number } = { 1: 400, 3: 335, 4: 335};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  
  cols = 3;
  rowHeight = ROW_HEIGHT[this.cols];
  category: string | undefined;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    });
  }

}
