import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { StockTitleModule } from 'src/app/components/stock-title';
import { SentimentModule } from '../components/sentiment';
import { StockSentimentViewComponent } from './stock-sentiment-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    SentimentModule,
    StockTitleModule,
    NgxSkeletonLoaderModule,
  ],
  declarations: [StockSentimentViewComponent],
  exports: [StockSentimentViewComponent],
})
export class StockSentimentViewModule {}
