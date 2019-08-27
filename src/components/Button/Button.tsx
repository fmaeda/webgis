import * as React from 'react';
import styled from '@emotion/styled/macro';

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

type SquareProps = {
  color?: string;
};

const Square = styled.div<SquareProps>`
  background: ${({ color = 'blue' }) => color};
  width: 20px;
  height: 20px;
`;

const styles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

const Button: React.FunctionComponent<ButtonProps> = ({ onClick, children }) => (
  <button onClick={onClick} style={styles} type="button">
    {children}
    <Square color="lime" />
  </button>
);

Button.defaultProps = {
  children: null,
  onClick: () => {},
};
export default Button;
