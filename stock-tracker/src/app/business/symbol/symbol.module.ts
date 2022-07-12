import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromSymbol from './symbol.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSymbol.symbolFeatureKey, fromSymbol.reducer),
  ],
})
export class SymbolModule {}
