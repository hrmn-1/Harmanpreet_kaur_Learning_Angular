import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { smartPhone } from '../../shared/models/smartphone';
import { SmartphoneService } from '../services/smartphone.service';

@Component({
  selector: 'app-modify-smart-phone-component',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-smart-phone-component.component.html',
  styleUrls: ['./modify-smart-phone-component.component.css']
})
export class ModifySmartPhoneComponentComponent {
  smartphoneForm: FormGroup;
  isEditMode: boolean = false;
  constructor(private fb: FormBuilder, private smartphoneService: SmartphoneService) {
    // Initialize the form with FormBuilder
    this.smartphoneForm = this.fb.group({
      model: ['', Validators.required],
      color: ['', Validators.required],
      size: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(0)]],
      isWaterproof: [false] // Default to false
    });
  }

  onSubmit(): void {
    if (this.smartphoneForm.valid) {
      const newSmartphone: smartPhone = this.smartphoneForm.value;
      this.smartphoneService.addSmartphone(newSmartphone).subscribe(response => {
        console.log('Smartphone added successfully', response);
      });
    } else {
      console.log('Form is invalid');
    }
  }
  resetForm(): void {
    this.smartphoneForm.reset();
    this.isEditMode = false; // Optionally reset the edit mode if needed
  }

}
