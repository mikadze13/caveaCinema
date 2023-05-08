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


  key!: any;

  arrr: Items[] = []
  constructor(private itemService: ItemService) {

  }


  ngOnInit(): void { 
    this.itemService.getItems().subscribe((items) => {
      this.itemsArr = items
      console.log(this.itemsArr)
      for (let i of this.itemsArr) {
        let kk = i.key 
        this.arrr.push(i[kk])
        this.key = i.key
        console.log(this.arrr)
      }
    })

    this.lengthOfArr = this.arrr.length
    this.itemService.itemsUpdated$.subscribe((items) => {
      this.arrr = items
    })
  }

  //  delete item from array
  onDeleteItem() {
    this.lengthOfArr = this.arrr.length

    for (let i of this.itemsArr) {
      this.key = i.key
    }

    this.itemService.deleteItem(this.key).subscribe(
      (response) => {
        console.log(response)
      }
    )
  }
}
