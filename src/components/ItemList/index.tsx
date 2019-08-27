import React from 'react';

import { Container, Item } from './styled';

type Props<T> = {
  items: T[];
  renderItem?: (item: T) => React.ReactNode;
  children?: (items: React.ReactNode) => React.ReactNode;
};

class ItemList<T> extends React.Component<Props<T & { id: string }>> {
  render() {
    const { items, renderItem, children } = this.props;
    const renderedItems = items.map(i => (
      <Item key={i.id}>{renderItem ? renderItem(i) : i}</Item>
    ));

    return (
      <Container>
        {children ? children(renderedItems) : renderedItems}
      </Container>
    );
  }
}

export default ItemList;
