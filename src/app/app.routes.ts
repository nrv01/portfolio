import { Routes } from '@angular/router';
import { HomeComponent } from '@features/home/pages/home/home.component';
import { LayoutComponent } from '@layout/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
];
