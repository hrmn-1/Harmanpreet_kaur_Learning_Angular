import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SmartphoneService } from '../services/smartphone.service';
import { Router } from '@angular/router';
import { smartPhone } from '../../shared/models/smartphone';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-smartphone-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.css'],
})
export class SmartphoneListComponent implements OnInit {
  displayedColumns: string[] = ['model', 'color', 'size', 'price', 'isWaterproof', 'actions'];
  smartPhoneList: smartPhone[] = [];
  dataSource: MatTableDataSource<smartPhone> = new MatTableDataSource(this.smartPhoneList);
  error: string | null = null;
  pageSize: number = 10; // Set default page size for paginator

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private smartphoneService: SmartphoneService, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchSmartphones();
  }

  fetchSmartphones(): void {
    this.smartphoneService.getSmartphones().subscribe({
      next: (data: smartPhone[]) => {
        this.smartPhoneList = data;
        this.dataSource.data = this.smartPhoneList;
        if (this.paginator) {
          this.dataSource.paginator = this.paginator; // Assign paginator to MatTableDataSource
        }
        this.error = null;
      },
      error: (error: any) => {
        console.error('Error fetching smartphones:', error);
        this.error = 'Failed to fetch smartphones. Please try again.';
      },
    });
  }

  editsmartPhone(smartphoneModel: string): void {
    this.router.navigate(['/smartphones', smartphoneModel]);
  }

    deletesmartPhone(smartphoneModel: string): void {
    if (confirm('Are you sure you want to delete this smartphone?')) {
      // Simulate the deletion by filtering out the smartphone
      this.smartPhoneList = this.smartPhoneList.filter(
        (smartphone: smartPhone) => smartphone.model !== smartphoneModel
      );
      this.dataSource.data = this.smartPhoneList; // Update MatTableDataSource after deletion
      console.log(`Smartphone with model ${smartphoneModel} deleted successfully.`);
    }
  }
}
