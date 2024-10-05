import {Component, Input, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {SmartphoneListItemComponent } from "../smartphone-list-item/smartphone-list-item.component";
import {smartPhone} from "../../shared/models/smartphone";
import {SmartphoneService} from "../services/smartphone.service";


@Component({
  selector: 'app-smartphone-list',
  standalone: true,
  imports: [
    NgForOf,
    SmartphoneListItemComponent,
    CommonModule
  ],
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.css']
})
export class SmartphoneListComponent implements OnInit {

  smartPhoneList: smartPhone[] = [];
  @Input() smartPhone!: smartPhone;

  constructor(private smartphoneService: SmartphoneService) {
  }

  ngOnInit() {
    //This lifecycle hook is a good place to fetch and init our data
    this.smartphoneService.getSmartphones().subscribe({
      next: (data: smartPhone[]) => this.smartPhoneList = data,
      error: err => console.error("Error fetching Smartphone", err),
      complete: () => console.log("Smartphone data fetch complete!")
    })
  }
}
