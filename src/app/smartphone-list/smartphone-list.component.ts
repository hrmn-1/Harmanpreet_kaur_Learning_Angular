import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOf, NgOptimizedImage } from '@angular/common';
import { SmartphoneListItemComponent } from '../smartphone-list-item/smartphone-list-item.component';
import { smartPhone } from '../../shared/models/smartphone';
import { SmartphoneService } from '../services/smartphone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smartphone-list',
  standalone: true,
  imports: [
    NgForOf,
    SmartphoneListItemComponent,
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.css']
})
export class SmartphoneListComponent implements OnInit {
  displayedColumns: string[] = ['model', 'color', 'size', 'price', 'isWaterproof', 'actions'];
  smartPhoneList: smartPhone[] = [];

  constructor(private smartphoneService: SmartphoneService, private router: Router) {
  }

  ngOnInit() {
    this.smartphoneService.getSmartphones().subscribe({
      next: (data: smartPhone[]) => (this.smartPhoneList = data),
      error: (err) => console.error('Error fetching smartphones', err),
      complete: () => console.log('Smartphone data fetch complete!')
    });
  }


  editSmartphone(model: string): void {
    this.router.navigate(['/modify-smart-phone', model]);
  }


  deleteSmartphone(model: string): void {
    if (confirm('Are you sure you want to delete this smartphone?')) {
      this.smartphoneService.deleteSmartphone(model).subscribe({
        next: () => {
          console.log('Smartphone deleted successfully');
          this.smartPhoneList = this.smartPhoneList.filter(smartphone => smartphone.model !== model); // Remove from the list
        },
        error: (err) => console.error('Error deleting smartphone', err)
      });
    }
  }
}

