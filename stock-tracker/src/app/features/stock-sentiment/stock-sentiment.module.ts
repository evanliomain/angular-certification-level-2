import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileModule } from 'src/app/business/profile';
import { SentimentModule } from 'src/app/business/sentiment';
import { routes } from './routes';
import { StockSentimentContainerComponent } from './stock-sentiment-container.component';
import { StockSentimentViewModule } from './view';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ProfileModule,
    SentimentModule,
    StockSentimentViewModule,
  ],
  declarations: [StockSentimentContainerComponent],
})
export class StockSentimentModule {}
