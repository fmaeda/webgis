import { StateType } from 'typesafe-actions';

import { productReducer } from 'store/product';
import { userReducer } from 'store/user/reducers';

const allReducers = {
  product: productReducer,
  user: userReducer,
};

export type RootState = StateType<typeof allReducers>;

export default allReducers;
