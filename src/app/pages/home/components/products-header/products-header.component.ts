import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.scss'
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort='decrescente';
  itemsShowCount = 10;
  
  constructor() { }

  ngOnInit(): void {
  }

  changeSort(newSort: string): void {
    this.sort = newSort;
  }

  changeItemsShowCount(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }

}
