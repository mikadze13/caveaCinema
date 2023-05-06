import { Injectable } from '@angular/core';
import { Items } from '../component/home/home.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
  items: Items[] = [
    {
      ItemName: "item 1",
      ItemLocation: "კავეა სითი მოლი",
      ItemPrice: 100,
      ID: 1
    },
    {
      ItemName: "item 2",
      ItemLocation: "კავეა გალერია",
      ItemPrice: 60,
      ID: 2
    },
    {
      ItemName: "item 3",
      ItemLocation: "კავეა თბილისი მოლი",
      ItemPrice: 50,
      ID: 3
    },
    {
      ItemName: "item 4",
      ItemLocation: "კავეა სითი მოლი",
      ItemPrice: 40,
      ID: 4
    },
    {
      ItemName: "item 5",
      ItemLocation: "კავეა თბილისი მოლი",
      ItemPrice: 20,
      ID: 5
    },
    {
      ItemName: "item 6",
      ItemLocation: "კავეა გალერია",
      ItemPrice: 20,
      ID: 6
    },
    {
      ItemName: "item 7",
      ItemLocation: "კავეა ისთ ფოინთი",
      ItemPrice: 30,
      ID: 7
    },
    {
      ItemName: "item 8",
      ItemLocation: "მთავარი ოფისი",
      ItemPrice: 80,
      ID: 8
    },
    {
      ItemName: "item 9",
      ItemLocation: "კავეა სითი მოლი",
      ItemPrice: 50,
      ID: 9
    },
    {
      ItemName: "item 10",
      ItemLocation: "კავეა გალერია",
      ItemPrice: 10,
      ID: 10
    }, {
      ItemName: "item 11",
      ItemLocation: "კავეა ისთ ფოინთი",
      ItemPrice: 20,
      ID: 11
    },
    {
      ItemName: "item 12",
      ItemLocation: "კავეა გალერია",
      ItemPrice: 50,
      ID: 12
    },
    {
      ItemName: "item 13",
      ItemLocation: "კავეა სითი მოლი",
      ItemPrice: 20,
      ID: 13
    },
    {
      ItemName: "item 14",
      ItemLocation: "კავეა გალერია",
      ItemPrice: 90,
      ID: 14
    },
    {
      ItemName: "item 15",
      ItemLocation: "კავეა თბილისი მოლი",
      ItemPrice: 80,
      ID: 15
    },
    {
      ItemName: "item 16",
      ItemLocation: "კავეა სითი მოლი",
      ItemPrice: 60,
      ID: 16
    },
    {
      ItemName: "item 17",
      ItemLocation: "კავეა გალერია",
      ItemPrice: 30,
      ID: 17
    },
    {
      ItemName: "item 18",
      ItemLocation: "კავეა ისთ ფოინთი",
      ItemPrice: 50,
      ID: 18
    },
    {
      ItemName: "item 19",
      ItemLocation: "მთავარი ოფისი",
      ItemPrice: 40,
      ID: 19
    },
    {
      ItemName: "item 20",
      ItemLocation: "კავეა თბილისი მოლი",
      ItemPrice: 30,
      ID: 20
    }
  ]; 

  addItem(newItem:any){
    this.items.unshift({ ItemName: newItem.itemName, ItemLocation: newItem.location, ItemPrice: newItem.itemPrice, ID: 21 })
  }
  deleteItem(index:number){
    this.items.splice(index, 1)
  }
}
