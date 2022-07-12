import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { StockTitleModule } from 'src/app/components/stock-title';
import { TendancyModule } from 'src/app/components/tendancy';
import { StockListComponent } from './stock-list.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    NgxSkeletonLoaderModule,
    TendancyModule,
    StockTitleModule,
  ],
  declarations: [StockListComponent],
  exports: [StockListComponent],
})
export class StockListModule {}
