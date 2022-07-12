import { createAction, props } from '@ngrx/store';

export const addSymbol = createAction(
  '[Symbol] Add Symbol',
  props<{ symbol: string }>()
);

export const removeSymbol = createAction(
  '[Symbol] Remove Symbol',
  props<{ symbol: string }>()
);
