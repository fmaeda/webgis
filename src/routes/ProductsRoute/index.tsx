import React from 'react';
import { connect } from 'react-redux';
import { ThunkActionDispatch } from 'redux-thunk';
import { RouteComponentProps } from 'react-router';

import { RootState } from 'store';
import { ProductAsyncActions } from 'store/product';

import StyledButton from 'components/StyledButton';
import ProductList from 'components/ProductList';

import { Container } from './styled';

const mapStateToProps = ({ product: { products } }: RootState) => ({
  products,
});

type Props = {
  fetchProducts: ThunkActionDispatch<typeof ProductAsyncActions.fetchProducts>;
} & RouteComponentProps
& ReturnType<typeof mapStateToProps>;

const ProductsPage = ({history, fetchProducts}: Props) => (
  <Container>
    <h1>Product List</h1>
    <ProductList />
    <StyledButton onClick={fetchProducts} label="Fetch Products" />
    <StyledButton onClick={() => history.push('/home')} label="HOME" />
  </Container>
);

export default connect(mapStateToProps, {
  fetchProducts: ProductAsyncActions.fetchProducts,
})(ProductsPage);
