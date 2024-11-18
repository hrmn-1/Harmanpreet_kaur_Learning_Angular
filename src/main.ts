import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import {SmartphoneListComponent } from './app/smartphone-list/smartphone-list.component';
import {SmartphoneListItemComponent } from './app/smartphone-list-item/smartphone-list-item.component';
import{ModifySmartPhoneComponentComponent} from "./app/modify-smart-phone-component/modify-smart-phone-component.component";
import {PageNotFoundComponentComponent} from "./app/page-not-found-component/page-not-found-component.component";
import {ApplicationRef} from "@angular/core";


const routes: Routes = [
  { path: '', redirectTo: '/smartphone', pathMatch: 'full' },
  { path: 'smartphone', component: SmartphoneListComponent },
  { path: 'smartphone/:model', loadComponent: () => import('./app/smartphone-list-item/smartphone-list-item.component').then(m => m.SmartphoneListItemComponent) },
  {path:'modify-smart-phone-component', loadComponent: () => import('./app/modify-smart-phone-component/modify-smart-phone-component.component').then(m => m.ModifySmartPhoneComponentComponent)},
  {path: '**', loadComponent: () => import('./app/page-not-found-component/page-not-found-component.component').then(m => m.PageNotFoundComponentComponent)}
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
