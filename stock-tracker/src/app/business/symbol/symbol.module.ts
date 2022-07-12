import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { storageMetaReducer } from 'src/app/behavior/storage';
import * as fromSymbol from './symbol.reducer';

const metaReducers: MetaReducer<any>[] = [
  storageMetaReducer(fromSymbol.symbolFeatureKey),
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSymbol.symbolFeatureKey, fromSymbol.reducer, {
      metaReducers,
    }),
  ],
})
export class SymbolModule {}
