export enum ActionTypes {
  SET_LOGIN = '@@user/SET_LOGIN',
  SET_NAME = '@@user/SET_NAME',
}

export type State = {
  readonly login: string;
  readonly name: string;
};
