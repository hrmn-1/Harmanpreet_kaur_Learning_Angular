import { Injectable } from '@angular/core';
import { smartPhoneList } from "../../shared/mockSmartphone.data";
import { catchError, Observable, of, throwError } from "rxjs";
import { smartPhone } from "../../shared/models/smartphone";

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  private smartphones: smartPhone[] = smartPhoneList; // Local copy of smartphone data for CRUD operations

  constructor() {
  }

  // Retrieve all smartphones
  getSmartphones(): Observable<smartPhone[]> {
    return of(this.smartphones);
  }

  // Retrieve a smartphone by its model
  getSmartphoneByModel(model: string): Observable<smartPhone | undefined> {

    return of(this.smartphones.find(smartphone => smartphone.model === model));
  }

  // Add a new smartphone
  addSmartphone(smartphone: smartPhone): Observable<smartPhone> {
    this.smartphones.push(smartphone);
    return of(smartphone);
  }

  // Update an existing smartphone
  updateSmartphone(updatedSmartphone: smartPhone): Observable<smartPhone | undefined> {
    const index = this.smartphones.findIndex(smartphone => smartphone.model === updatedSmartphone.model);
    if (index > -1) {
      this.smartphones[index] = updatedSmartphone;
      return of(updatedSmartphone);
    }
    return of(undefined); // Return undefined if the smartphone is not found
  }

  // Delete a smartphone by its model
  deleteSmartphone(model: string): void {
    this.smartphones = this.smartphones.filter(smartphone => smartphone.model !== model);
  }
}
