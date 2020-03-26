import React from 'react';

import { FaGlobeAmericas, FaInfoCircle } from 'react-icons/fa';
import { AiOutlineDashboard } from 'react-icons/ai';
import { IoIosMenu } from 'react-icons/io';

import Item from './Item';

import { Container, Spacer } from './styled';
import { withRouter, RouteComponentProps } from 'react-router-dom';

type Props = {} & RouteComponentProps;

class Menu extends React.Component<Props> {
  handleClick = (path: string) => () => {
    const { history } = this.props;
    history.push(path);
  };

  handleToggle = () => {
    console.log('toggle');
  };

  render() {
    const {
      location: { pathname },
    } = this.props;

    return (
      <Container>
        <Item
          icon={IoIosMenu}
          color="transparent"
          active={false}
          onClick={this.handleToggle}
        />
        <Spacer />
        <Item
          icon={FaGlobeAmericas}
          color="#2ECC40"
          active={pathname === '/map'}
          onClick={this.handleClick('/map')}
        />
        <Item
          icon={AiOutlineDashboard}
          color="#FF851B"
          active={pathname === '/dashboard'}
          onClick={this.handleClick('/dashboard')}
        />
        <Item
          icon={FaInfoCircle}
          color="#0074D9"
          active={pathname === '/about'}
          onClick={this.handleClick('/about')}
        />
      </Container>
    );
  }
}

export default withRouter(Menu);
