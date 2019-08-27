import styled, { CreateStyled } from '@emotion/styled/macro';
type Theme = {
  name: string;
  color: {
    primary: string;
    secondary: string;
    red: string;
    green: string;
    blue: string;
    darkBlue: string;
    darkGray: string;
    lightSilver: string;
    darkSilver: string;
    translucentWhite: string;
    translucentBlack: string;
    silver: string;
    error: string;
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
    red: '#A6392F',
    green: '#0F8C3C',
    blue: '#1A95C0',
    darkBlue: '#0F4098',
    darkGray: '#4A4A4A',
    lightSilver: '#F7F7F7',
    darkSilver: '#A0A0A0',
    silver: '#ededed',
    error: 'red',
    translucentWhite: 'rgba(255, 255, 255, 0.5)',
    translucentBlack: 'rgba(0, 0, 0, 0.5)',
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
