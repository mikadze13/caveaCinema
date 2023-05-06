import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Items } from 'src/app/core/component/home/home.model';
import { ItemService } from 'src/app/core/service/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit{ 
  AddItemForm = new FormGroup({
    location: new FormControl('', [Validators.required]),
    itemName: new FormControl('', [Validators.required]),
    itemPrice: new FormControl('', [Validators.required]),
  });
  constructor(private itemService:ItemService){}
  onNewItem(inputElement: any) {
    inputElement = this.AddItemForm.value;
     this.itemService.addItem(inputElement) 
    alert('added successfully')
    if (inputElement) { 
      this.AddItemForm.reset();
    }
  }
  get location() {
    return this.AddItemForm.get('location');
  }

  get itemName() {
    return this.AddItemForm.get('itemName');
  }

  get itemPrice() {
    return this.AddItemForm.get('itemPrice');
  }
  ngOnInit(): void {
    
  }
}
