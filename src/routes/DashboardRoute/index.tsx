import React from 'react';
import { connect } from 'react-redux';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  // Tooltip,
} from 'recharts';

import { Container, Head, Content } from './styled';
import data from './data';

import AutorizacoesPanel from './AutorizacoesPanel';
import EmpreendimentosPanel from './EmpreendimentosPanel';
import ArvoresPanel from './ArvoresPanel';

import { RootState } from 'store';
import { TipoDado } from 'model/enums';

const mapStateToProps = ({ menu: { tipoDado } }: RootState) => ({
  tipoDado,
});

type Props = {} & ReturnType<typeof mapStateToProps>;

class DashboardRoute extends React.Component<Props> {
  render() {
    const { tipoDado } = this.props;

    return (
      <Container>
        <Head>
          {tipoDado === TipoDado.AUTORIZACOES && <AutorizacoesPanel />}
          {tipoDado === TipoDado.EMPREENDIMENTOS && <EmpreendimentosPanel />}
          {tipoDado === TipoDado.ARVORES && <ArvoresPanel />}
        </Head>
        <Content>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="color2018" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.7} />
                  <stop offset="90%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="color2019" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.7} />
                  <stop offset="90%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="color2020" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffc658" stopOpacity={0.7} />
                  <stop offset="90%" stopColor="#ffc658" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="label"
                interval="preserveStartEnd"
                height={70}
                stroke="whitesmoke"
              />
              <YAxis interval="preserveStartEnd" stroke="whitesmoke" />

              <CartesianGrid strokeDasharray="3 3" />

              <Area
                key="2018"
                type="monotone"
                dataKey="value_2018"
                stroke="gray"
                fillOpacity={1}
                fill="url(#color2018)"
              />
              <Area
                key="2019"
                type="monotone"
                dataKey="value_2019"
                stroke="gray"
                fillOpacity={1}
                fill="url(#color2019)"
              />
              <Area
                key="2020"
                type="monotone"
                dataKey="value_2020"
                stroke="gray"
                fillOpacity={1}
                fill="url(#color2020)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Content>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(DashboardRoute);
