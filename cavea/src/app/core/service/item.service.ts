import { Injectable } from '@angular/core';
import { Items } from '../component/home/home.model';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl = environment.baseUrl
  constructor(private httpClient: HttpClient) { }
  items: Items[] = [
    
  ];

  arr:any =[
     
  ]
  itemsUpdated$ = new Subject<Items[]>()
 itemArray: any[] = [] 
  
  // save items in localstorage
  private saveItems() {
    localStorage.setItem('Item', JSON.stringify(this.items))
  }

  // get items from firebase
  getItems():Observable<Items[]>{ 
   return  this.httpClient.get(`${this.baseUrl}caveaCinema.json`).pipe(
    map((response)=>{
      if(response){ 
      //  get key
        for(let key in response){  
          this.itemArray.unshift({ ...response, key:key} ); 
        }
         
        return this.itemArray
      }else{
        return []
      }
    })
   )
  }

  // add item in firebase 
  addItem(newItem: any) { 
    this.httpClient.post(`${this.baseUrl}caveaCinema.json`, {
      ItemName: newItem.itemName,
      ItemLocation: newItem.location,
      ItemPrice: newItem.itemPrice
    }).subscribe((response) => {
      console.log(response)
    })
  }

  // delete item
  deleteItem(key: string) { 
   return this.httpClient.delete(`${this.baseUrl}caveaCinema/${key}.json`).pipe(
    tap(()=>{
      const itemIndex = this.itemArray.map((item)=> item.key).indexOf(key) 
      this.itemArray.splice(itemIndex, 1); 
      this.itemsUpdated$.next(this.itemArray)
    })
   )
  }
}
