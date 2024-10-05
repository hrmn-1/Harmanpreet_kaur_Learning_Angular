import {Component, Input, OnInit} from '@angular/core';
import {smartPhone} from "../../shared/models/smartphone";







@Component({
  selector: 'app-smartphone-list-item',
  standalone: true,

  templateUrl: './smartphone-list-item.component.html',
  styleUrl: './smartphone-list-item.component.css'
})
export class SmartphoneListItemComponent implements OnInit {
  @Input() smartPhone!: smartPhone;

  constructor() {
  }

  ngOnInit(): void {

  }
}

