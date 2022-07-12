import { Routes } from '@angular/router';
import { StockListContainerComponent } from 'src/app/features/stock-list';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StockListContainerComponent,
  },
];
