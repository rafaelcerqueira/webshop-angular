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

  constructor() { }

  ngOnInit(): void {
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

}
