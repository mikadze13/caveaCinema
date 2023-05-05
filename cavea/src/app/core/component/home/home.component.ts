import { Component, OnInit } from '@angular/core';
import { Items } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lengthOfArr!:number
  items: Items[] = [
    {
      ItemName: "item 1",
      ItemLocation: "",
      ItemPrice: 100,
      ID: 1
    },
    {
      ItemName: "item 2",
      ItemLocation: "",
      ItemPrice: 60,
      ID: 2
    },
    {
      ItemName: "item 3",
      ItemLocation: "",
      ItemPrice: 50,
      ID: 3
    },
    {
      ItemName: "item 4",
      ItemLocation: "",
      ItemPrice: 40,
      ID: 4
    },
    {
      ItemName: "item 5",
      ItemLocation: "",
      ItemPrice: 20,
      ID: 5
    },
    {
      ItemName: "item 6",
      ItemLocation: "",
      ItemPrice: 20,
      ID: 6
    },
    {
      ItemName: "item 7",
      ItemLocation: "",
      ItemPrice: 30,
      ID: 7
    },
    {
      ItemName: "item 8",
      ItemLocation: "",
      ItemPrice: 80,
      ID: 8
    },
    {
      ItemName: "item 9",
      ItemLocation: "",
      ItemPrice: 50,
      ID: 9
    },
    {
      ItemName: "item 10",
      ItemLocation: "",
      ItemPrice: 10,
      ID: 10
    }, {
      ItemName: "item 11",
      ItemLocation: "",
      ItemPrice: 20,
      ID: 11
    },
    {
      ItemName: "item 12",
      ItemLocation: "",
      ItemPrice: 50,
      ID: 12
    },
    {
      ItemName: "item 13",
      ItemLocation: "",
      ItemPrice: 20,
      ID: 13
    },
    {
      ItemName: "item 14",
      ItemLocation: "",
      ItemPrice: 90,
      ID: 14
    },
    {
      ItemName: "item 15",
      ItemLocation: "",
      ItemPrice: 80,
      ID: 15
    },
    {
      ItemName: "item 16",
      ItemLocation: "",
      ItemPrice: 60,
      ID: 16
    },
    {
      ItemName: "item 17",
      ItemLocation: "",
      ItemPrice: 30,
      ID: 17
    },
    {
      ItemName: "item 18",
      ItemLocation: "",
      ItemPrice: 50,
      ID: 18
    },
    {
      ItemName: "item 19",
      ItemLocation: "",
      ItemPrice: 40,
      ID: 19
    },
    {
      ItemName: "item 20",
      ItemLocation: "",
      ItemPrice: 30,
      ID: 20
    }
  ];
  ItemPrice: number[] = [120, 130, 140, 150, 120, 321,]
  pageSize: number = 3;
  page: number = 1;
  totalPages: number = 0;
  pagedItems: string[] = [];
  constructor() {
     
  }

   
  ngOnInit(): void {
    this.lengthOfArr = this.items.length
  }
}
