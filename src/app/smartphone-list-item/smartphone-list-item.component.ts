import { Component, Input, OnInit } from '@angular/core';
import { smartPhone } from '../../shared/models/smartphone';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SmartphoneService } from '../services/smartphone.service';
import { smartPhoneList } from '../../shared/mockSmartphone.data';

@Component({
  selector: 'app-smartphone-list-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './smartphone-list-item.component.html',
  styleUrls: ['./smartphone-list-item.component.css']
})
export class SmartphoneListItemComponent implements OnInit {
  smartphone: smartPhone | undefined;
  smartphoneList: smartPhone[] = [];
  currentIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private smartphoneService: SmartphoneService,
    private router: Router
  ) {}

  // Fetch the list of smartphones and subscribe to route parameter changes
  ngOnInit(): void {
    this.smartphoneService.getSmartphones().subscribe(smartphones => {
      this.smartphoneList = smartphones;

      // Subscribe to paramMap changes to update the view based on URL parameter
      this.route.paramMap.subscribe(params => {
        const model = params.get('model');
        if (model) {
          this.currentIndex = this.smartphoneList.findIndex(
            phone => phone.model === model
          );
          this.smartphone = this.smartphoneList[this.currentIndex];
        }
      });
    });
  }

  // Navigate back to the smartphone list view
  goBack(): void {
    this.router.navigate(['/smartphone']);
  }

  // Navigate forward through the smartphone array with overflow protection
  goForward(): void {
    if (this.currentIndex < this.smartphoneList.length - 1) {
      this.currentIndex++;
      this.router.navigate(['/smartphone', this.smartphoneList[this.currentIndex].model]);
    }
  }

  // Navigate backward through the smartphone array with overflow protection
  goBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate(['/smartphone', this.smartphoneList[this.currentIndex].model]);
    }
  }

  protected readonly smartPhoneList = smartPhoneList;
}
