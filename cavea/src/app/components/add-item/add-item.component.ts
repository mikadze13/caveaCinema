import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Items } from 'src/app/core/component/home/home.model';
import { ItemService } from 'src/app/core/service/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  AddItemForm = new FormGroup({
    location: new FormControl('', [Validators.required]),
    itemName: new FormControl('', [Validators.required]),
    itemPrice: new FormControl('', [Validators.required]),
  });
  constructor(private itemService: ItemService, private route: Router) { }
  onNewItem(inputElement: any) {
    inputElement = this.AddItemForm.value;
    this.itemService.addItem(inputElement)
    alert('added successfully')

    // redirect when you add item
    if (confirm('Do you want to be redirected to the home page?')) {
      this.route.navigate(['home'])
    } else {
      this.route.navigate(['add'])
    }
    // If the element received all values successfully reset the inputs
    if (inputElement) {
      this.AddItemForm.reset();
    }
  }


  // 

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
