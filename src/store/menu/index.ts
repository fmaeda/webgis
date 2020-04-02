import {
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from 'immer-reducer';
import { TipoDado } from 'model/enums';

type State = {
  tipoDado: TipoDado;
};

const DEFAULT_STATE: State = {
  tipoDado: TipoDado.AUTORIZACOES,
};

class MenuReducer extends ImmerReducer<State> {
  setTipoDado(tipoDado: TipoDado) {
    this.draftState.tipoDado = tipoDado;
  }
}

export const menuActions = createActionCreators(MenuReducer);
export const menuReducer = createReducerFunction(MenuReducer, DEFAULT_STATE);
