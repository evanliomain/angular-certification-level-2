import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { StockTitleComponent } from './stock-title.component';

@NgModule({
  imports: [CommonModule, NgxSkeletonLoaderModule],
  declarations: [StockTitleComponent],
  exports: [StockTitleComponent],
})
export class StockTitleModule {}
