import { Component, Input } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";

let input = Input();




@Component({
  selector: 'app-smartphone-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass
  ],
  templateUrl: './smartphone-list-item.component.html',
  styleUrl: './smartphone-list-item.component.css'
})
export class SmartphoneListItemComponent {
  /**
   * Input marks the property as an input property
   * that can receive data from a parent
   * ? says it is optional
   */
  @Input() item: any;
}
