import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromSentiment from './sentiment.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SentimentEffects } from './sentiment.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSentiment.sentimentFeatureKey, fromSentiment.reducer),
    EffectsModule.forFeature([SentimentEffects])
  ]
})
export class SentimentModule { }
