import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistryListComponent } from './pages/registry-list/registry-list.component';

export const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'home', component:HomeComponent },
  { path: 'regitry', component:RegistryListComponent }
];
