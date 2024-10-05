import { Injectable } from '@angular/core';
import {smartPhoneList} from "../../shared/mockSmartphone.data";
import { Observable, of} from "rxjs";
import {smartPhone} from "../../shared/models/smartphone";

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {
  private smartphones: smartPhone[] = smartPhoneList; // Local copy of smartphone data for CRUD Operations

  constructor() { }
  // Return all smartphones
  getSmartphones(): Observable<smartPhone[]> {
    return of(smartPhoneList);
  }
  getSmartphoneByModel(model: string): Observable<smartPhone | undefined> {
    const smartphone = this.smartphones.find(smartphone => smartphone.model === model);
    return of(smartphone);
  }
  addSmartphone(newSmartphone: smartPhone): Observable<smartPhone[]> {
    this.smartphones.push(newSmartphone);
    return of(this.smartphones);
  }
  updateSmartphone(updatedSmartphone: smartPhone): Observable<smartPhone[]> {
    const index = this.smartphones.findIndex(phone => phone.model === updatedSmartphone.model);
    if (index !== -1) {
      this.smartphones[index] = updatedSmartphone;
    }
    return of(this.smartphones);
  }
  deleteSmartphone(model: string): Observable<smartPhone[]> {
    this.smartphones = this.smartphones.filter(phone => phone.model !== model);
    return of(this.smartphones);
  }
}
