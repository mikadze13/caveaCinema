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
  @Input() Itemmessage: any;
  itemIndex!: number

  pageSize: number = 3;
  page: number = 1;
  totalPages: number = 0;
  pagedItems: string[] = [];
  constructor(private itemService: ItemService) {

  }


  ngOnInit(): void {
    this.itemsArr = this.itemService.items
    this.lengthOfArr = this.itemsArr.length

  }
  logInfo(event: any) {
    console.log(event)
  }


  onAddItem(event: any) {
  }

  onDeleteItem() {
    // for (let i of this.itemsArr) {
      // const index = this.itemsArr.indexOf()
      // this.itemIndex = index 
    // }
    // console.log(this.itemIndex)
    // this.itemService.deleteItem(this.itemIndex)
  }
}
