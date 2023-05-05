import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  AddItemForm = new FormGroup({
    location: new FormControl('', [Validators.required]),
    itemName: new FormControl('', [Validators.required]),
    itemPrice: new FormControl('', [Validators.required]), 
  }); 

  AddItems(inputElement: any) {
    inputElement = this.AddItemForm.value;
    console.log(inputElement)
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
}
