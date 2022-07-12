import { Action, ActionReducer } from '@ngrx/store';

export function storageMetaReducer<S, A extends Action = Action>(key: string) {
  return (reducer: ActionReducer<S, A>) =>
    (state: S, action: A): S => {
      let nextState = reducer(state, action);
      const storageKey = `__storage__.${key}`;
      const savedState =
        JSON.parse(localStorage.getItem(storageKey) ?? '{}') || {};
      nextState = { ...nextState, ...savedState };
      localStorage.setItem(storageKey, JSON.stringify(nextState));
      return nextState;
    };
}
