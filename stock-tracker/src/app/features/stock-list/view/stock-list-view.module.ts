import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddStockFormModule } from '../components/add-stock-form';
import { StockListModule } from '../components/stock-list';
import { StockListViewComponent } from './stock-list-view.component';

@NgModule({
  imports: [CommonModule, AddStockFormModule, StockListModule],
  declarations: [StockListViewComponent],
  exports: [StockListViewComponent],
})
export class StockListViewModule {}
