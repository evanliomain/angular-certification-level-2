import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ApiModule } from 'src/app/behavior/api';
import { QuoteEffects } from './quote.effects';
import * as fromQuote from './quote.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromQuote.quoteFeatureKey, fromQuote.reducer),
    EffectsModule.forFeature([QuoteEffects]),
    ApiModule,
  ],
})
export class QuoteModule {}
