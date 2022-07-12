import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileModule } from 'src/app/business/profile';
import { QuoteModule } from 'src/app/business/quote';
import { SymbolModule } from 'src/app/business/symbol';
import { routes } from './routes';
import { StockListContainerComponent } from './stock-list-container.component';
import { StockListViewModule } from './view';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    StockListViewModule,
    SymbolModule,
    QuoteModule,
    ProfileModule,
  ],
  declarations: [StockListContainerComponent],
})
export class StockListModule {}
