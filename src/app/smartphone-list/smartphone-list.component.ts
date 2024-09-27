import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import { SmartphoneListItemComponent } from "../smartphone-list-item/smartphone-list-item.component";


@Component({
  selector: 'app-smartphone-list',
  standalone: true,
  imports: [
    NgForOf,
    SmartphoneListItemComponent,
    NgClass
  ],
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.css']
})
export class SmartphoneListComponent {

  // Define smartphoneItems array using the smartPhone interface
  smartphoneItems = [
    { model: 'iPhone 13', color: 'Black', size: 6.1, price: 999, isWaterproof: true,image: 'src/image/iphone13.jpeg' },
    { model: 'Galaxy S23', color: 'Phantom Black', size: 6.8, price: 1199, isWaterproof: true,image: 'src/image/samsung galaxy s21.jpeg' },
    { model: 'Pixel 6', color: 'Snow', size: 6.3, price: 899, isWaterproof: true,image: 'src/image/google pixel 6.jpeg' },
    { model: 'OnePlus 9', color: 'Titan Black', size: 6.7, price: 799, isWaterproof: true,image: 'src/image/oneplus9.jpeg' }
  ];

  selectedSmartphoneItem: any;

  // Method to select a smartphone
  selectSmartphoneItem(item: any) {
    this.selectedSmartphoneItem = item;
  }

}
