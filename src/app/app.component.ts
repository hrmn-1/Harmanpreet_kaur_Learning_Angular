import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from  '@angular/common';
import { NgForOf } from "@angular/common";
import { smartPhone } from '../shared/models/smartphone'; // Correct import path
import { SmartphoneListComponent } from './smartphone-list/smartphone-list.component';
import { SmartphoneListItemComponent } from './smartphone-list-item/smartphone-list-item.component';
import { SmartphoneService } from './services/smartphone.service'; // Correct import for the service

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SmartphoneListComponent, SmartphoneListItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Smartphone Management System';

  displaysmartPhone: smartPhone | undefined;

  constructor(private smartphoneService: SmartphoneService) {} // Capitalize the service name

  ngOnInit(): void {
    this.smartphoneService.getSmartphoneByModel('iphone16') // Ensure you pass the correct model type
      .subscribe({
        next: (smartphone: smartPhone | undefined): void => {
          this.displaysmartPhone = smartphone;
        },
        error: (err: any) => console.error('Error displaying smartphone by model', err)
      });
  }
}
