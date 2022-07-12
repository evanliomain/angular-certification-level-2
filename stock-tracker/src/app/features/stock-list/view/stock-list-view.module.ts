import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TendancyModule } from 'src/app/components/tendancy';
import { StockListViewComponent } from './stock-list-view.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    TendancyModule,
  ],
  declarations: [StockListViewComponent],
  exports: [StockListViewComponent],
})
export class StockListViewModule {}
