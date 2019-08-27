import React from 'react';
import { Container } from './styled';

type Props = {
  onClick: () => void;
  label?: string;
};

export default ({ onClick, label = '' }: Props) => (
  <Container onClick={onClick}>{label}</Container>
);
