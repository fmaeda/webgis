import { StateType } from 'typesafe-actions';

import { productReducer } from 'store/product';
import { userReducer } from 'store/user/reducers';
import { inventarioReducer } from 'store/inventario';

const allReducers = {
  product: productReducer,
  user: userReducer,
  inventario: inventarioReducer,
};

export type RootState = StateType<typeof allReducers>;

export default allReducers;
