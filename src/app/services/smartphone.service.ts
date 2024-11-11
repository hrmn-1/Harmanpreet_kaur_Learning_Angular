import { Injectable } from '@angular/core';
import { smartPhoneList } from "../../shared/mockSmartphone.data";
import {catchError, Observable, of, throwError} from "rxjs";
import { smartPhone } from "../../shared/models/smartphone";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {
  private apiUrl = 'api/smartphones'; // URL to web API
  private smartphones: smartPhone[] = smartPhoneList; // Local copy of smartphone data for CRUD operations

  constructor(private http: HttpClient) { }

  // Retrieve all smartphones from API
  getSmartphones(): Observable<smartPhone[]> {
    return this.http.get<smartPhone[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  // Retrieve a smartphone by its model
  getSmartphoneByModel(model: string): Observable<smartPhone | undefined> {
    return this.http.get<smartPhone>(`${this.apiUrl}/${model}`).pipe(catchError(this.handleError));
  }

  // Add a new smartphone
  addSmartphone(newSmartphone: smartPhone): Observable<smartPhone> {
    return this.http.post<smartPhone>(this.apiUrl, newSmartphone).pipe(catchError(this.handleError));
  }

  // Update an existing smartphone
  updateSmartphone(updatedSmartphone: smartPhone): Observable<smartPhone> {
    const url = `${this.apiUrl}/${updatedSmartphone.model}`;
    return this.http.put<smartPhone>(url, updatedSmartphone).pipe(catchError(this.handleError));
  }

  // Delete a smartphone by its model
  deleteSmartphone(model: string): Observable<{}> {
    const url = `${this.apiUrl}/${model}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  // Handle errors for HTTP requests
  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
