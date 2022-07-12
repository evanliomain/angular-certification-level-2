import { createReducer, on } from '@ngrx/store';
import * as SymbolActions from './symbol.actions';

export const symbolFeatureKey = 'symbol';

export type State = Record<string, boolean>;

export const initialState: State = {};

export const reducer = createReducer(
  initialState,

  on(SymbolActions.addSymbol, (state, { symbol }) => ({
    ...state,
    [symbol]: true,
  }))
);
