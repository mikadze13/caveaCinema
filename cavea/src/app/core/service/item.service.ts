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
    },
    {
      ItemName: "item 2",
      ItemLocation: "კავეა გალერია",
      ItemPrice: 60,
    },
    {
      ItemName: "item 3",
      ItemLocation: "კავეა თბილისი მოლი",
      ItemPrice: 50,
    },
    {
      ItemName: "item 4",
      ItemLocation: "კავეა სითი მოლი",
      ItemPrice: 40,
    },
    {
      ItemName: "item 5",
      ItemLocation: "კავეა თბილისი მოლი",
      ItemPrice: 20,
    },
    {
      ItemName: "item 6",
      ItemLocation: "კავეა გალერია",
      ItemPrice: 20,
    },
    {
      ItemName: "item 7",
      ItemLocation: "კავეა ისთ ფოინთი",
      ItemPrice: 30,
    },
    {
      ItemName: "item 8",
      ItemLocation: "მთავარი ოფისი",
      ItemPrice: 80,
    },
    {
      ItemName: "item 9",
      ItemLocation: "კავეა სითი მოლი",
      ItemPrice: 50,
    },
    {
      ItemName: "item 10",
      ItemLocation: "კავეა გალერია",
      ItemPrice: 10,

    }, {
      ItemName: "item 11",
      ItemLocation: "კავეა ისთ ფოინთი",
      ItemPrice: 20,

    },
    {
      ItemName: "item 12",
      ItemLocation: "კავეა გალერია",
      ItemPrice: 50,

    },
    {
      ItemName: "item 13",
      ItemLocation: "კავეა სითი მოლი",
      ItemPrice: 20,

    },
    {
      ItemName: "item 14",
      ItemLocation: "კავეა გალერია",
      ItemPrice: 90,

    },
    {
      ItemName: "item 15",
      ItemLocation: "კავეა თბილისი მოლი",
      ItemPrice: 80,

    },
    {
      ItemName: "item 16",
      ItemLocation: "კავეა სითი მოლი",
      ItemPrice: 60,

    },
    {
      ItemName: "item 17",
      ItemLocation: "კავეა გალერია",
      ItemPrice: 30,

    },
    {
      ItemName: "item 18",
      ItemLocation: "კავეა ისთ ფოინთი",
      ItemPrice: 50,

    },
    {
      ItemName: "item 19",
      ItemLocation: "მთავარი ოფისი",
      ItemPrice: 40,

    },
    {
      ItemName: "item 20",
      ItemLocation: "კავეა თბილისი მოლი",
      ItemPrice: 30,

    }
  ];

  // save items in localstorage
  private saveItems() {
    localStorage.setItem('Item', JSON.stringify(this.items))
  }

  getItems() {
    const item = localStorage.getItem('Item')
    if (item) {
      this.items = JSON.parse(item)
    }
    return this.items
  }

  // add item
  addItem(newItem: any) {
    this.items.unshift({ ItemName: newItem.itemName, ItemLocation: newItem.location, ItemPrice: newItem.itemPrice })
    this.saveItems()
  }

  // delete item
  deleteItem(index: number) {
    this.items.splice(index, 1)
    this.saveItems()
  }
}
