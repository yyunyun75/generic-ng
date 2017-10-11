import { Routes } from '@angular/Router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routeConfig: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];
