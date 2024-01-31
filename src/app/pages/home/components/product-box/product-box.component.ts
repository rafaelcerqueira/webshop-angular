import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.scss'
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'Nome do Produto',
    price: 1000.00,
    category: 'Categoria do Produto',
    description: 'Descrição do Produto',
    image: 'https://via.placeholder.com/150'
  };
  @Output() addToCart = new EventEmitter<Product>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
