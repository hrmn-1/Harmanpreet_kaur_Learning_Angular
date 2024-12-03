import { Routes } from '@angular/router';
import { SmartphoneListItemComponent } from './smartphone-list-item/smartphone-list-item.component'; // Correct path to your component

export const routes: Routes = [
  {
    path: 'smartphone/:model',  // Define a route with the 'model' parameter
    component: SmartphoneListItemComponent
  },
  // Other routes for your app
];
