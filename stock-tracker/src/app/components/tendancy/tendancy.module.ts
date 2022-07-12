import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TendancyComponent } from './tendancy.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TendancyComponent],
  exports: [TendancyComponent],
})
export class TendancyModule {}
