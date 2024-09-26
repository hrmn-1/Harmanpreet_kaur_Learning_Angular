import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";
import { SmartphoneListItemComponent } from "../smartphone-list-item/smartphone-list-item.component";


@Component({
  selector: 'app-smartphone-list',
  standalone: true,
  imports: [
    NgForOf,
    SmartphoneListItemComponent
  ],
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.css']
})
export class SmartphoneListComponent {

  // Define smartphoneItems array using the smartPhone interface
  smartphoneItems = [
    { model: 'iPhone 14', color: 'Black', size: 6.1, price: 999, isWaterproof: true },
    { model: 'Galaxy S23', color: 'Phantom Black', size: 6.8, price: 1199, isWaterproof: true },
    { model: 'Pixel 7', color: 'Snow', size: 6.3, price: 899, isWaterproof: true },
    { model: 'OnePlus 11', color: 'Titan Black', size: 6.7, price: 799, isWaterproof: true }
  ];

  selectedSmartphoneItem: any;  // Updated to use the smartPhone interface

  // Method to select a smartphone
  selectSmartphoneItem(item: any) {
    this.selectedSmartphoneItem = item;
  }

}
