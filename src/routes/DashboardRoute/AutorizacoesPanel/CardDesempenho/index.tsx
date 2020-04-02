import React from 'react';
import Card from 'components/Card';
import { ChartType } from 'model/enums';

import { Content, DetailsContainer } from './styled';
import SampleStackedChart from './SampleStackedChart';

type Props = {};

class CardDesempenho extends React.Component<Props> {
  renderContent = (chartType: ChartType) => {
    return (
      <Content>
        <SampleStackedChart />
      </Content>
    );
  };

  renderDetails = () => {
    return (
      <DetailsContainer>
        <h3>Quanto tempo demora para aprovar uma Autorização?</h3>
        <p>....</p>
        <p>....</p>
        <p>....</p>
      </DetailsContainer>
    );
  };

  render() {
    return (
      <Card
        title="Dias para Autorização"
        options={[ChartType.BAR_CHART]}
        details={this.renderDetails()}
        flex={3}
        enableScreenshot
      >
        {this.renderContent}
      </Card>
    );
  }
}

export default CardDesempenho;
