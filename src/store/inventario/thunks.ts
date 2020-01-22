import axios, { AxiosResponse } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';
import { AnyAction } from 'redux';
import { Arvore } from 'model/arvore';

type ArvoreResponse = Omit<Arvore, 'coord'> & {
  latitude: number;
  longitude: number;
};

const fetchInventario = (): ThunkAction<
  Promise<Arvore[]>,
  RootState,
  null,
  AnyAction
> => () => {
  return axios
    .get('/ibama/api/inventario')
    .then(({ data }: AxiosResponse<ArvoreResponse[]>) =>
      data.map(r => {
        const { latitude, longitude, ...rest } = r;
        return {
          ...rest,
          coord: latitude < -34 ? [latitude, longitude] : [longitude, latitude],
        };
      }),
    );
};

export default {
  fetchInventario,
};
