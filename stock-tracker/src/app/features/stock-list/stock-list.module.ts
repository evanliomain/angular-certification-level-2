import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StockListContainerComponent } from './stock-list-container.component';
import { StockListViewModule } from './view';

@NgModule({
  imports: [CommonModule, StockListViewModule],
  declarations: [StockListContainerComponent],
})
export class StockListModule {}
