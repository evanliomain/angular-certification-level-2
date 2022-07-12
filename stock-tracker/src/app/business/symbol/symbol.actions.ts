import { createAction, props } from '@ngrx/store';

export const addSymbol = createAction(
  '[Symbol] Add Symbol',
  props<{ symbol: string }>()
);
