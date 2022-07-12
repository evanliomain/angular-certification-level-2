import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('src/app/features/stock-list').then(
        ({ StockListModule }) => StockListModule
      ),
  },
];
