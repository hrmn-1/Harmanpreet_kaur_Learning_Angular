import { Component, OnInit } from '@angular/core';
import { smartPhone } from '../../shared/models/smartphone';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';  // Import ParamMap
import { SmartphoneService } from '../services/smartphone.service';
import { NgIf } from '@angular/common';
import { HighlightOnFocusDirective } from "../directives/highlight-on-focus.directive";
import { MatCard, MatCardContent, MatCardHeader, MatCardModule } from "@angular/material/card";
import { MatButton } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-smartphone-list-item',
  standalone: true,
  imports: [
    NgIf, HighlightOnFocusDirective, MatCard, MatCardHeader, MatCardContent, MatButton, MatCardModule, MatIconModule
  ],
  templateUrl: './smartphone-list-item.component.html',
  styleUrls: ['./smartphone-list-item.component.css']
})
export class SmartphoneListItemComponent implements OnInit {
  smartphone: smartPhone | undefined;
  smartphoneList: smartPhone[] = [];
  currentIndex: number = 0;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private smartphoneService: SmartphoneService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.smartphoneService.getSmartphones().subscribe({
      next: (smartphones: smartPhone[]): void => {
        this.smartphoneList = smartphones;
        this.error = null;


        this.route.paramMap.subscribe((params: ParamMap) => {
          const model = params.get('model');
          if (model) {
            this.currentIndex = this.smartphoneList.findIndex(
              phone => phone.model === model
            );
            if (this.currentIndex !== -1) {
              this.smartphone = this.smartphoneList[this.currentIndex];
            } else {
              console.warn(`Smartphone with model "${model}" not found.`);
            }
          } else {
            console.warn('No model parameter found in route.');
          }
        });
      },
      error: (err: unknown) => {
        this.error = 'Error fetching smartphone';
        if (err instanceof Error) {
          console.error('Error fetching smartphone:', err.message);
        } else {
          console.error('Unknown error fetching smartphone:', err);
        }
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/smartPhone']);
  }

  goForward(): void {
    if (this.currentIndex < this.smartphoneList.length - 1) {
      this.currentIndex++;
      this.router.navigate(['/smartPhone', this.smartphoneList[this.currentIndex].model]);
    }
  }

  goBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate(['/smartPhone', this.smartphoneList[this.currentIndex].model]);
    }
  }
}
