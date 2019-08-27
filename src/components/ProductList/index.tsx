import React from 'react';
import { connect } from 'react-redux';

import { RootState } from 'store';
import { Product } from 'model/product';
import ItemList from 'components/ItemList';

const mapStateToProps = ({ product: { products } }: RootState) => ({
  products,
});

type Props = {} & ReturnType<typeof mapStateToProps>;

class ProductList extends React.Component<Props> {
  renderItem = (item: Product) => {
    return (
      <>
        <span>{item.id}</span>
        <span> - </span>
        <span>{item.name}</span>
      </>
    );
  };

  render() {
    const { products } = this.props;
    return (
      <ItemList items={products} renderItem={this.renderItem}>
        {items => (
          <>
            <span>Produtos...</span>
            {items}
          </>
        )}
      </ItemList>
    );
  }
}

export default connect(mapStateToProps)(ProductList);
