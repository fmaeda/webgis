import styled, { CreateStyled } from '@emotion/styled/macro';
type Theme = {
  name: string;
  color: {
    primary: string;
    secondary: string;
    darkGray: string;
    blueGray: string;
  };
  size: {
    font: {
      normal: string;
      big: string;
    };
    icon: {
      normal: string;
      big: string;
    };
  };
};

export const theme: Theme = {
  name: 'default',
  color: {
    primary: '#2C68BD',
    secondary: '#e91e63',
    darkGray: '#52535a',
    blueGray: '#474959',
  },
  size: {
    font: {
      normal: '11px',
      big: '14px',
    },
    icon: {
      normal: '14px',
      big: '16px',
    },
  },
};

export default styled as CreateStyled<Theme>;
