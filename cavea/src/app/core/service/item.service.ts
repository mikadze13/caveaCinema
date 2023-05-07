import { Injectable } from '@angular/core';
import { Items } from '../component/home/home.model';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl = environment.baseUrl
  constructor(private httpClient: HttpClient) { }
  items: Items[] = [
    
  ];

  arr:any =[
     // {
    //   ItemName: "item 1",
    //   ItemLocation: "კავეა სითი მოლი",
    //   ItemPrice: 100,
    // },
    // {
    //   ItemName: "item 2",
    //   ItemLocation: "კავეა გალერია",
    //   ItemPrice: 60,
    // },
    // {
    //   ItemName: "item 3",
    //   ItemLocation: "კავეა თბილისი მოლი",
    //   ItemPrice: 50,
    // },
    // {
    //   ItemName: "item 4",
    //   ItemLocation: "კავეა სითი მოლი",
    //   ItemPrice: 40,
    // },
    // {
    //   ItemName: "item 5",
    //   ItemLocation: "კავეა თბილისი მოლი",
    //   ItemPrice: 20,
    // },
    // {
    //   ItemName: "item 6",
    //   ItemLocation: "კავეა გალერია",
    //   ItemPrice: 20,
    // },
    // {
    //   ItemName: "item 7",
    //   ItemLocation: "კავეა ისთ ფოინთი",
    //   ItemPrice: 30,
    // },
    // {
    //   ItemName: "item 8",
    //   ItemLocation: "მთავარი ოფისი",
    //   ItemPrice: 80,
    // },
    // {
    //   ItemName: "item 9",
    //   ItemLocation: "კავეა სითი მოლი",
    //   ItemPrice: 50,
    // },
    // {
    //   ItemName: "item 10",
    //   ItemLocation: "კავეა გალერია",
    //   ItemPrice: 10,

    // }, {
    //   ItemName: "item 11",
    //   ItemLocation: "კავეა ისთ ფოინთი",
    //   ItemPrice: 20,

    // },
    // {
    //   ItemName: "item 12",
    //   ItemLocation: "კავეა გალერია",
    //   ItemPrice: 50,

    // },
    // {
    //   ItemName: "item 13",
    //   ItemLocation: "კავეა სითი მოლი",
    //   ItemPrice: 20,

    // },
    // {
    //   ItemName: "item 14",
    //   ItemLocation: "კავეა გალერია",
    //   ItemPrice: 90,

    // },
    // {
    //   ItemName: "item 15",
    //   ItemLocation: "კავეა თბილისი მოლი",
    //   ItemPrice: 80,

    // },
    // {
    //   ItemName: "item 16",
    //   ItemLocation: "კავეა სითი მოლი",
    //   ItemPrice: 60,

    // },
    // {
    //   ItemName: "item 17",
    //   ItemLocation: "კავეა გალერია",
    //   ItemPrice: 30,

    // },
    // {
    //   ItemName: "item 18",
    //   ItemLocation: "კავეა ისთ ფოინთი",
    //   ItemPrice: 50,

    // },
    // {
    //   ItemName: "item 19",
    //   ItemLocation: "მთავარი ოფისი",
    //   ItemPrice: 40,

    // },
    // {
    //   ItemName: "item 20",
    //   ItemLocation: "კავეა თბილისი მოლი",
    //   ItemPrice: 30,

    // }
  ]
  // save items in localstorage
  private saveItems() {
    localStorage.setItem('Item', JSON.stringify(this.items))
  }

  // get items from firebase
  getItems():Observable<Items[]>{ 
   return  this.httpClient.get(`${this.baseUrl}caveaCinema.json`).pipe(
    map((response)=>{
      if(response){
        
        const itemArray: any[] = [] 
      //  get key
        for(let key in response){  
          itemArray.push({ ...response, key:key} ); 
        }
         
        return itemArray
      }else{
        return []
      }
    })
   )
  }

  // add item in firebase 
  addItem(newItem: any) {
    // this.items.unshift({ ItemName: newItem.itemName, ItemLocation: newItem.location, ItemPrice: newItem.itemPrice })
    // this.saveItems()
    this.httpClient.post(`${this.baseUrl}caveaCinema.json`, {
      ItemName: newItem.itemName,
      ItemLocation: newItem.location,
      ItemPrice: newItem.itemPrice
    }).subscribe((response) => {
      console.log(response)
    })
  }

  // delete item
  deleteItem(index: number) {
    this.items.splice(index, 1)
    this.saveItems()
  }
}
