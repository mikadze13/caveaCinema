import { Component, Input, OnInit } from '@angular/core';
import { Items } from './home.model';
import { ItemService } from '../../service/item.service';
// import { ItemService } from '../../service/item.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lengthOfArr!: number
  itemsArr: Items[] = []
  itemIndex!: number
  pageSize: number = 3;
  page: number = 1;
  totalPages: number = 0;
  pagedItems: string[] = [];

  filterBy = 'name';
  nameFilter = '';
  priceFilter = '';
  minPriceFilter = '';
  maxPriceFilter = '';

  key!: any;

  arrr: Items[] = []
  constructor(private itemService: ItemService) {

  }


  ngOnInit(): void {
    this.itemService.getItems().subscribe((items) => {
      this.itemsArr = items
      for (let i of this.itemsArr) {
        let kk = i.key
        this.arrr.push(i[kk])
        this.key = i.key
      }
    })

    setTimeout(() => {
      this.lengthOfArr = this.itemsArr.length
    }, 100); 
    this.itemService.itemsUpdated$.subscribe((items) => {
      this.arrr = items

      setTimeout(() => {
        this.lengthOfArr = this.arrr.length 
      }, 1000);
       
      
    })
     
  }

  //  delete item from array
  onDeleteItem() {
    this.lengthOfArr = this.arrr.length

    for (let i of this.itemsArr) {
      this.key = i.key
    }

    this.itemService.deleteItem(this.key).subscribe((response)=>{
      console.log(response)
    })
  }

  // FILTER ITEMS 

  get filteredItems() {

    if (this.filterBy === 'name') {
      return this.arrr.filter(item => item.ItemName.toLowerCase().includes(this.nameFilter.toLowerCase()));
    } else if (this.filterBy === 'price') {
      let filteredItems = this.arrr;
      if (this.minPriceFilter) {
        filteredItems = filteredItems.filter(item => item.ItemPrice >= Number(this.minPriceFilter));
      }
      if (this.maxPriceFilter) {
        filteredItems = filteredItems.filter(item => item.ItemPrice <= Number(this.maxPriceFilter));
      }
      return filteredItems.sort((a, b) => a.ItemPrice - b.ItemPrice);
    }
    return this.arrr;
  }
}
