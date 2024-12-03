import { Injectable } from '@angular/core';
import { smartPhoneList } from "../../shared/mockSmartphone.data";
import { catchError, Observable, of, throwError } from "rxjs";
import { smartPhone } from "../../shared/models/smartphone";

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  private smartphones: smartPhone[] = smartPhoneList; // Local copy of smartphone data for CRUD operations

  constructor() { }

  // Retrieve all smartphones
  getSmartphones(): Observable<smartPhone[]> {
    return of(this.smartphones).pipe(
      catchError(this.handleError('getSmartphones', []))
    );
  }

  // Retrieve a smartphone by its model
  getSmartphoneByModel(model: string): Observable<smartPhone | undefined> {
    const smartphone = this.smartphones.find(smartphone => smartphone.model === model);
    if (smartphone) {
      return of(smartphone);
    } else {
      return throwError(() => new Error(`Smartphone with model "${model}" not found`)); // Return error if not found
    }
  }

  // Add a new smartphone
  addSmartphone(smartphone: smartPhone): Observable<smartPhone> {
    this.smartphones.push(smartphone);
    return of(smartphone).pipe(
      catchError(this.handleError('addSmartphone', smartphone))
    );
  }

  // Update an existing smartphone
  updateSmartphone(updatedSmartphone: smartPhone): Observable<smartPhone | undefined> {
    const index = this.smartphones.findIndex(smartphone => smartphone.model === updatedSmartphone.model);
    if (index > -1) {
      this.smartphones[index] = updatedSmartphone;
      return of(updatedSmartphone).pipe(
        catchError(this.handleError('updateSmartphone', updatedSmartphone))
      );
    } else {
      return throwError(() => new Error('Smartphone not found for update')); // Return error if not found
    }
  }

  // Delete a smartphone by its model
  deleteSmartphone(model: string): Observable<void> {
    const index = this.smartphones.findIndex(smartphone => smartphone.model === model);
    if (index > -1) {
      this.smartphones.splice(index, 1); // Remove the smartphone from the array
      return of(void 0); // Return empty observable
    } else {
      return throwError(() => new Error(`Smartphone with model "${model}" not found for deletion`)); // Handle error if not found
    }
  }

  // Handle errors by logging them and returning an empty result
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T); // Return a safe result if error occurs
    };
  }
}
