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


  arrr:Items[]=[]
  constructor(private itemService: ItemService) {

  }


  ngOnInit(): void {
    this.itemService.getItems().subscribe((response) => {
      this.itemsArr = response
        
      for(let i of this.itemsArr){
        let kk = i.key
        this.arrr.push(i[kk])
      } 
    })
     
    this.lengthOfArr = this.itemsArr.length

  } 

  //  delete item from array
  onDeleteItem(index: number) {
    this.lengthOfArr = this.itemsArr.length
    this.itemService.deleteItem(index)
  }
}
