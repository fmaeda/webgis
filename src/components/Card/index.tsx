import React from 'react';

import html2canvas from 'html2canvas';

import {
  IoIosInformationCircleOutline,
  IoIosArrowDropleft,
} from 'react-icons/io';

import { FaCamera } from 'react-icons/fa';

import {
  Container,
  OptionsContainer,
  ContentCard,
  FrontCard,
  BackCard,
  Children,
  Spacer,
  Title,
  AboutContainer,
} from './styled';
import Option from './Option';
import { ChartType, chartIcons, chartColors } from 'model/enums';

type Props = {
  title?: string;
  children?: (chartType: ChartType) => React.ReactNode;
  details?: React.ReactNode;
  options?: ChartType[];
  flex?: 'none' | number;
  enableScreenshot?: boolean;
};

type State = {
  showDetails: boolean;
  chartType: ChartType;
};

class Card extends React.Component<Props, State> {
  contentRef = React.createRef<HTMLDivElement>();

  constructor(props: Props) {
    super(props);
    const { options } = props;
    this.state = {
      showDetails: false,
      chartType:
        options && options.length > 0 ? options[0] : ChartType.PIE_CHART,
    };
  }

  handleClick = (chartType: ChartType) => () => {
    console.log('click');
    this.setState({ chartType });
  };

  toggleDetails = () => {
    this.setState(({ showDetails }) => ({
      showDetails: !showDetails,
    }));
  };

  takeScreenshot = () => {
    console.log('screenshot!');
    const element = this.contentRef.current;
    if (element) {
      element.style.backgroundColor = 'gray';
      html2canvas(element).then(canvas => {
        if (navigator.clipboard['write']) {
          canvas.toBlob(blob => {
            navigator.clipboard['write']([
              new ClipboardItem({ 'image/png': blob! }),
            ]);
          });
        } else {
          const link = document.createElement('a');
          link.download = 'grafico.png';
          link.href = canvas.toDataURL();
          link.click();
        }
        element.style.backgroundColor = 'transparent';
      });
    }
  };

  render() {
    const {
      title,
      children,
      details,
      options,
      flex,
      enableScreenshot,
    } = this.props;
    const { showDetails, chartType } = this.state;

    return (
      <Container flipped={showDetails} flex={flex}>
        <ContentCard flipped={showDetails}>
          <FrontCard>
            {title && <Title>{title}</Title>}
            {details && (
              <AboutContainer onClick={this.toggleDetails}>
                <Option
                  key="info"
                  icon={IoIosInformationCircleOutline}
                  color="transparent"
                />
              </AboutContainer>
            )}
            {children && (
              <Children ref={this.contentRef}>{children(chartType)}</Children>
            )}
            {options && (
              <OptionsContainer>
                {enableScreenshot && (
                  <Option
                    key="screenshot"
                    icon={FaCamera}
                    color="transparent"
                    onClick={this.takeScreenshot}
                    // active={chartType === chart}
                  />
                )}
                {options.map(chart => (
                  <Option
                    key={chart}
                    icon={chartIcons[chart]}
                    color={chartColors[chart]}
                    onClick={this.handleClick(chart as ChartType)}
                    active={chartType === chart}
                  />
                ))}
              </OptionsContainer>
            )}
          </FrontCard>
          <BackCard>
            <AboutContainer onClick={this.toggleDetails}>
              <Option
                key="back"
                icon={IoIosArrowDropleft}
                color="transparent"
              />
              {/* <IoIosArrowDropleft /> */}
            </AboutContainer>
            {details}
          </BackCard>
        </ContentCard>
      </Container>
    );
  }
}

export default Card;
