import styled from 'styles';
import Color from 'color';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 12px;
  align-self: center;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
  /* border: solid lime; */
  align-self: stretch;
  user-select: none;
`;

type ItemProps = {
  color: string;
  active?: boolean;
};
export const ItemContainer = styled.div<ItemProps>`
  position: relative;
  font-size: 16px;
  font-weight: 300;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
  margin: 0 12px -2px 12px;
  height: 70%;
  transition: all 0.2s ease-in-out;
  ${({ active }) =>
    active
      ? `
      cursor: default;
      background: rgba(0, 0, 0, 0.2);
      `
      : `
    cursor: pointer;
    :hover {
      color: whitesmoke;
      > div {
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 4px 0px rgba(255, 255, 255, 0.2);
      }
    }
  `};
`;

export const SelectedMarker = styled.div<ItemProps>`
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  ${({ active, color }) =>
    active &&
    `
      background: ${Color(color)
        .lighten(0.1)
        .hex()};
      box-shadow: 0 0 4px 0px ${color};
  `};
`;
