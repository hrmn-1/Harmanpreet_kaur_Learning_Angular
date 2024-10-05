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
}
