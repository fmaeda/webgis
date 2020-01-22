import {
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from 'immer-reducer';
import { Arvore } from 'model/arvore';

type State = {
  arvores: Arvore[];
};

const DEFAULT_STATE: State = {
  arvores: [],
};

class InventarioReducer extends ImmerReducer<State> {
  setArvores(arvores: Arvore[]) {
    this.draftState.arvores = arvores;
  }
}

export const inventarioActions = createActionCreators(InventarioReducer);
export const inventarioReducer = createReducerFunction(
  InventarioReducer,
  DEFAULT_STATE,
);
export { default as inventarioThunks } from './thunks';
