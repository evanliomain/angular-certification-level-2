import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TendancyModule } from 'src/app/components/tendancy';
import { SentimentToMonthPipe } from './sentiment-to-month.pipe';
import { SentimentComponent } from './sentiment.component';

@NgModule({
  imports: [CommonModule, TendancyModule],
  declarations: [SentimentComponent, SentimentToMonthPipe],
  exports: [SentimentComponent],
})
export class SentimentModule {}
