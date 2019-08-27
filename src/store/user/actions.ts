import { action, ActionType } from 'typesafe-actions';
import { ActionTypes } from './types';

const setLogin = (login: string) => action(ActionTypes.SET_LOGIN, { login });
const setName = (name: string) => action(ActionTypes.SET_NAME, { name });

const actions = {
  setLogin,
  setName,
};

export type Action = ActionType<typeof actions>;
export default actions;
