import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { storageMetaReducer } from 'src/app/behavior/storage';
import { ProfileEffects } from './profile.effects';
import * as fromProfile from './profile.reducer';

const metaReducers: MetaReducer<any>[] = [
  storageMetaReducer(fromProfile.profileFeatureKey),
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProfile.profileFeatureKey, fromProfile.reducer, {
      metaReducers,
    }),
    EffectsModule.forFeature([ProfileEffects]),
  ],
})
export class ProfileModule {}
