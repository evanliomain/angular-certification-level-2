import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { SentimentModule } from '../components/sentiment';
import { SentimentToMonthPipe } from '../components/sentiment/sentiment-to-month.pipe';
import { StockSentimentViewComponent } from './stock-sentiment-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    SentimentModule,
  ],
  declarations: [StockSentimentViewComponent, ],
  exports: [StockSentimentViewComponent],
})
export class StockSentimentViewModule {}
