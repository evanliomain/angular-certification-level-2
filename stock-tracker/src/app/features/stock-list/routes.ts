import { Routes } from '@angular/router';
import { StockListContainerComponent } from './stock-list-container.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StockListContainerComponent,
  },
];
