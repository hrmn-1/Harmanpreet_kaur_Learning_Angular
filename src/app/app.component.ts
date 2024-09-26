import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from  '@angular/common';
import { smartPhone } from '../shared/models/user';
import {SmartphoneListComponent} from "./smartphone-list/smartphone-list.component";
import {SmartphoneListItemComponent} from "./smartphone-list-item/smartphone-list-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,SmartphoneListComponent,SmartphoneListItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Generation';

  smartPhonesList: smartPhone[] = [
    {model: "iphone14", color: "Black", size: 6, price: 600, isWaterproof: true},
    {model: "iphone15pro", color: "Silver", size: 5, price: 800, isWaterproof: true},
    {model: "Samsung", color: "Blue", size: 7, price: 700, isWaterproof: false},
    {model: "iphone16", color: "Pink", size: 9, price: 1400, isWaterproof: true},
    {model: "Vivo", color: "Red", size: 6, price: 500, isWaterproof: false},
    {model: "iphone13", color: "Yellow", size: 7, price: 498, isWaterproof: true}
  ];

}
