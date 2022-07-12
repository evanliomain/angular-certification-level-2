import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { StockListContainerComponent } from './stock-list-container.component';
import { StockListViewModule } from './view';

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, StockListViewModule],
  declarations: [StockListContainerComponent],
})
export class StockListModule {}
