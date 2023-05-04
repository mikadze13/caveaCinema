import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  items: string[] = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10'];
  pageSize: number = 3;
  page: number = 1;
  totalPages: number = 0;
  pagedItems: string[] = [];
  constructor(){
    this.setPage(1);
  }

  setPage(page: number) {
    this.page = page;
    this.totalPages = Math.ceil(this.items.length / this.pageSize);
    this.pagedItems = this.items.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
  } 

  onPageChange(page: number) {
    this.setPage(page);
  }
  ngOnInit(): void {
    
  }
}
