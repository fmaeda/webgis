import React from 'react';
import {
  FaChartArea,
  FaChartBar,
  FaChartLine,
  FaChartPie,
} from 'react-icons/fa';

import {
  IoIosInformationCircleOutline,
  IoIosArrowDropleft,
} from 'react-icons/io';

import {
  Container,
  OptionsContainer,
  ContentCard,
  FrontCard,
  BackCard,
  Spacer,
  Title,
  AboutContainer,
} from './styled';
import Option from './Option';

type Props = {
  title?: string;
  children?: React.ReactNode;
  details?: React.ReactNode;
};

type State = {
  showDetails: boolean;
};

class Card extends React.Component<Props, State> {
  state = {
    showDetails: false,
  };

  handleClick = () => {
    console.log('click');
  };

  toggleDetails = () => {
    this.setState(({ showDetails }) => ({
      showDetails: !showDetails,
    }));
  };

  render() {
    const { title, children, details } = this.props;
    const { showDetails } = this.state;

    return (
      <Container flipped={showDetails}>
        <ContentCard flipped={showDetails}>
          <FrontCard>
            {title && <Title>{title}</Title>}
            {details && (
              <AboutContainer onClick={this.toggleDetails}>
                <IoIosInformationCircleOutline />
              </AboutContainer>
            )}
            {children}
            <OptionsContainer>
              <Option
                icon={FaChartArea}
                color="tomato"
                onClick={this.handleClick}
              />
              <Option
                icon={FaChartBar}
                color="tomato"
                onClick={this.handleClick}
              />
              <Option
                icon={FaChartLine}
                color="tomato"
                onClick={this.handleClick}
              />
              <Option
                icon={FaChartPie}
                color="tomato"
                onClick={this.handleClick}
              />
            </OptionsContainer>
          </FrontCard>
          <BackCard>
            <AboutContainer onClick={this.toggleDetails}>
              <IoIosArrowDropleft />
            </AboutContainer>
            {details}
          </BackCard>
        </ContentCard>
      </Container>
    );
  }
}

export default Card;
