import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOf, NgOptimizedImage } from '@angular/common';
import { SmartphoneListItemComponent } from '../smartphone-list-item/smartphone-list-item.component';
import { smartPhone } from '../../shared/models/smartphone';
import { SmartphoneService } from '../services/smartphone.service';
import {Router, RouterLink} from '@angular/router';
import {SmartphoneDisplayPipe} from "../pipes/smartphone-display.pipe";


@Component({
  selector: 'app-smartphone-list',
  standalone: true,
  imports: [
    NgForOf,
    SmartphoneListItemComponent,
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    SmartphoneDisplayPipe
  ],
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.css']
})
export class SmartphoneListComponent implements OnInit {
  displayedColumns: string[] = ['model', 'color', 'size', 'price', 'isWaterproof', 'actions'];
  smartPhoneList: smartPhone[] = [];
  error: string | null = null;

  constructor(private smartphoneService: SmartphoneService, private router: Router) {
  }

  ngOnInit() {
    this.smartphoneService.getSmartphones().subscribe({
      next: (data: smartPhone[]) => {this.smartPhoneList = data;
      this.error = null;
    },
      error: err => {
      this.error = 'Error fetching students'; // Set an error message
      console.error("Error fetching Students", err);
    },
      complete: () => console.log("Student data fetch complete!")
  });
}
 selectedSmartphone?: smartPhone;
    selectSmartphone(smartphone: smartPhone): void {
      this.selectedSmartphone = smartphone;
  }


}

