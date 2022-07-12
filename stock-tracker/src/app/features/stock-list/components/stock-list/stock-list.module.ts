import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { TendancyModule } from 'src/app/components/tendancy';
import { StockListComponent } from './stock-list.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule, TendancyModule, RouterModule],
  declarations: [StockListComponent],
  exports: [StockListComponent],
})
export class StockListModule {}
