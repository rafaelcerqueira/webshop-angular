import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent {
  
  @Output() showCategory = new EventEmitter<string>();

  categories = ['All', 'Phones', 'Laptops', 'Tablets', 'Monitors'];
  
  constructor() {}

  ngOnInit(): void {}

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }

}
