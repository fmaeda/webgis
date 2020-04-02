import React from 'react';
import { ChartType } from 'model/enums';

import { CardContent, DetailsContainer } from './styled';
import SamplePieChart from './SamplePieChart';
import SampleBarChart from './SampleBarChart';
import Card from 'components/Card';

type Props = {};

class CardBiomas extends React.Component<Props> {
  renderContent = (chartType: ChartType) => {
    switch (chartType) {
      case ChartType.PIE_CHART: {
        return <SamplePieChart />;
      }
      case ChartType.BAR_CHART: {
        return <SampleBarChart />;
      }
      case ChartType.NUMERIC_CHART: {
        return (
          <CardContent>
            <table>
              <thead>
                <tr>
                  <th>Bioma</th>
                  <th>Quantidade</th>
                  <th>(%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mata Atlântica</td>
                  <td>300</td>
                  <td>25%</td>
                </tr>
                <tr>
                  <td>Floresta</td>
                  <td>400</td>
                  <td>25%</td>
                </tr>
                <tr>
                  <td>Cerrado</td>
                  <td>250</td>
                  <td>25%</td>
                </tr>
                <tr>
                  <td>Pampa</td>
                  <td>290</td>
                  <td>25%</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        );
      }
      default: {
        return <span>{chartType}</span>;
      }
    }
  };

  render() {
    return (
      <Card
        flex={2}
        title="Autorizações por Bioma"
        enableScreenshot
        options={[
          ChartType.PIE_CHART,
          ChartType.BAR_CHART,
          ChartType.NUMERIC_CHART,
        ]}
        details={
          <DetailsContainer>
            <h3>Você sabe o que é um Bioma?</h3>
            <p>
              Bioma é um conjunto de espécies de plantas e animais que vivem em
              determinada região. Cada bioma tem fauna e flora específicas que
              são definidas pelas condições físicas, climáticas, geográficas e
              litológicas (das rochas). Ou seja, cada bioma tem uma diversidade
              biológica singular, própria.
            </p>
            <p>
              <b>Fonte: </b>
              <a
                // eslint-disable-next-line max-len
                href="https://www.wwf.org.br/natureza_brasileira/questoes_ambientais/biomas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.wwf.org.br
              </a>
            </p>
          </DetailsContainer>
        }
      >
        {this.renderContent}
      </Card>
    );
  }
}

export default CardBiomas;
