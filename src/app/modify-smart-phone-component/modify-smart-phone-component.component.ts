import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { smartPhone } from '../../shared/models/smartphone';
import { SmartphoneService } from '../services/smartphone.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-modify-smart-phone-component',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-smart-phone-component.component.html',
  styleUrls: ['./modify-smart-phone-component.component.css']
})
export class ModifySmartPhoneComponentComponent implements OnInit {
  smartphoneForm: FormGroup;
  isEditMode: boolean = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private smartphoneService: SmartphoneService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Initialize the form with FormBuilder
    this.smartphoneForm = this.fb.group({
      model: ['', Validators.required],
      color: ['', Validators.required],
      size: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(0)]],
      isWaterproof: [false] // Default to false
    });
  }

  ngOnInit(): void {
    const model = this.route.snapshot.paramMap.get('model');
    if (model) {
      this.isEditMode = true;
      this.smartphoneService.getSmartphoneByModel(model).pipe(
        catchError(err => {
          this.error = 'Error fetching smartphone';
          console.error('Error fetching smartphone:', err);
          return of(null);
        })
      ).subscribe(smartphone => {
        if (smartphone) {
          this.smartphoneForm.patchValue(smartphone);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.smartphoneForm.valid) {
      const smartphoneData: smartPhone = this.smartphoneForm.value;
      if (this.isEditMode) {
        this.smartphoneService.updateSmartphone(smartphoneData).subscribe(() => {
          console.log('Smartphone updated successfully');
          this.navigateToSmartphoneList();
        });
      } else {
        this.smartphoneService.addSmartphone(smartphoneData).subscribe(() => {
          console.log('Smartphone added successfully');
          this.navigateToSmartphoneList();
        });
      }
    } else {
      console.log('Form is invalid');
    }
  }

  onDelete(): void {
    const model = this.smartphoneForm.value.model;
    if (model) {
      this.smartphoneService.deleteSmartphone(model).subscribe(() => {
        console.log('Smartphone deleted successfully');
        this.navigateToSmartphoneList();
      });
    }
  }

  navigateToSmartphoneList(): void {
    this.router.navigate(['/smartphones']);
  }
}
