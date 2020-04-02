import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Container } from './styled';
import {
  TipoDado,
  tipoDadoLabels,
  parseMenuPath,
  menuColors,
} from 'model/enums';

import Item from './Item';
import { RootState } from 'store';
import { menuActions } from 'store/menu/index';

const mapStateToProps = ({ menu: { tipoDado } }: RootState) => ({
  tipoDado,
});

type Props = {
  setTipoDado: typeof menuActions.setTipoDado;
} & RouteComponentProps &
  ReturnType<typeof mapStateToProps>;

class SubMenu extends React.Component<Props> {
  handleClick = (tipoDado: TipoDado) => () => {
    const { setTipoDado } = this.props;
    setTipoDado(tipoDado);
  };

  render() {
    const {
      location: { pathname },
      tipoDado,
    } = this.props;
    const color = menuColors[parseMenuPath[pathname]];

    return (
      <Container>
        {Object.values(TipoDado).map(tipo => (
          <Item
            key={tipo}
            label={tipoDadoLabels[tipo]}
            color={color}
            onClick={this.handleClick(tipo)}
            active={tipo === tipoDado}
          />
        ))}
      </Container>
    );
  }
}

export default connect(mapStateToProps, {
  setTipoDado: menuActions.setTipoDado,
})(withRouter(SubMenu));
