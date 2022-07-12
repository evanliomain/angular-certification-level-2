import { Routes } from '@angular/router';
import { StockSentimentContainerComponent } from './stock-sentiment-container.component';

export const routes: Routes = [
  {
    path: ':symbol',
    component: StockSentimentContainerComponent,
  },
];
