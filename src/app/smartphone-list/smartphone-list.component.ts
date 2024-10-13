import { Component, OnInit } from '@angular/core';
import {CommonModule, NgForOf, NgOptimizedImage} from '@angular/common';
import { SmartphoneListItemComponent } from '../smartphone-list-item/smartphone-list-item.component';
import {smartPhone } from '../../shared/models/smartphone';
import { SmartphoneService } from '../services/smartphone.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-smartphone-list',
  standalone: true,
  imports: [
    NgForOf,
    SmartphoneListItemComponent,
    RouterLink,
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.css']
})
export class SmartphoneListComponent implements OnInit {
  // Columns to display in the table
  displayedColumns: string[] = ['model', 'color', 'size', 'price', 'isWaterproof'];
  smartPhoneList: smartPhone[] = [];

  constructor(private smartphoneService: SmartphoneService) {
    // Constructor used for dependency injection
  }

  ngOnInit() {
    // Fetch smartphones when component initializes
    this.smartphoneService.getSmartphones().subscribe({
      next: (data: smartPhone[]) => (this.smartPhoneList = data),
      error: (err) => console.error('Error fetching smartphones', err),
      complete: () => console.log('Smartphone data fetch complete!')
    });
  }

  selectedSmartphone?: smartPhone;

  // Method to handle smartphone selection
  selectSmartphone(smartphone: smartPhone): void {
    this.selectedSmartphone = smartphone;
  }
}
