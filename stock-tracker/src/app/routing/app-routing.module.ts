import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StockListModule } from 'src/app/features/stock-list';
import { routes } from './routes';

@NgModule({
  imports: [RouterModule.forRoot(routes), StockListModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
