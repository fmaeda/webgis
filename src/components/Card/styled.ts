import styled from 'styles';
import Color from 'color';

type FlipProps = {
  flipped: boolean;
  flex?: 'none' | number;
};

export const Container = styled.div<FlipProps>`
  display: flex;
  position: relative;
  background-color: transparent;
  perspective: 1000px;
  flex: ${({ flex = 1 }) => flex};
  color: rgba(255, 255, 255, 0.5);
  /* width: 100%; */
  height: 200px;
  margin: 20px;
  /* border: solid yellow; */
`;

export const ContentCard = styled.div<FlipProps>`
  display: flex;
  align-self: stretch;
  flex: 1;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${({ flipped }) => flipped && `transform: rotateY(180deg);`};
`;

export const FrontCard = styled.div`
  position: absolute;
  width: 100%;
  border-radius: 4px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.1)
  );
  box-shadow: 0 0px 4px 0px rgba(0, 0, 0, 0.2);
  min-height: 120px;
  height: 100%;
  backface-visibility: visible;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  /* transform: rotateY(0deg); */
`;

export const BackCard = styled.div`
  transform: rotateY(180deg);
  /* transform: rotateY(0deg); */
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.1)
  );
  box-shadow: 0 0px 4px 0px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  backface-visibility: visible;
  backface-visibility: hidden;
`;

export const OptionsContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 8px 0 4px 0;
  padding: 0 12px;
  flex-direction: row;
  box-shadow: inset 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(3px);
  /* padding-top: 2px; */
`;

type OptionProps = {
  color: string;
  active?: boolean;
};
export const OptionContainer = styled.div<OptionProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
  padding: 8px;
  margin-bottom: -2px;
  cursor: pointer;
  border-radius: 0 0 4px 4px;
  /* overflow: hidden; */
  clip: rect(0px, 0px, 20px, 4px);
  ${({ active }) =>
    active
      ? `
      cursor: default;
      /* background: rgba(255, 255, 255, 0.1); */
      /* box-shadow: inset 0 -2px 2px 1px rgba(0, 0, 0, 0.3); */
      /* backdrop-filter: blur(30px); */
      `
      : `
    cursor: pointer;
    :hover {
      color: whitesmoke;
      > div {
        /* background: rgba(255, 255, 255, 0.2); */
        /* box-shadow: 0 0 4px 0px rgba(255, 255, 255, 0.2); */
      }
    }
  `};

  /* :hover {
    color: ${({ color }) => color};
  } */
`;

export const Spacer = styled.div`
  display: flex;
  width: 1px;
  align-self: stretch;
  background: rgba(255, 255, 255, 0.2);
  margin: 8px 4px;
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-self: stretch;
  margin: 8px 16px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  backface-visibility: hidden;
`;

export const AboutContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 12px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease-in-out;
  svg {
    font-size: 24px;
  }
`;

type ItemProps = {
  active?: boolean;
  color: string;
};
export const SelectedMarker = styled.div<ItemProps>`
  position: absolute;
  bottom: 4px;
  left: 6px;
  right: 6px;
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

export const Children = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 8px;
  /* border: solid red; */
  transition: background-color 0.2s ease-in-out;
`;
