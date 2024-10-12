import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from
    '@angular/router';
import {SmartphoneListComponent } from './app/smartphone-list/smartphone-list.component';
import {SmartphoneListItemComponent } from './app/smartphone-list-item/smartphone-list-item.component';



const routes: Routes = [
  { path: 'smartphone', component: SmartphoneListComponent },
  { path: 'smartphone/:Model', component: SmartphoneListComponent
  }
];
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});

