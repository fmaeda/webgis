import styled from 'styles';

type FlipProps = {
  flipped: boolean;
};

export const Container = styled.div<FlipProps>`
  display: flex;
  position: relative;
  background-color: transparent;
  perspective: 1000px;
  flex: 1;
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
  backface-visibility: hidden;
  transform-style: preserve-3d;
`;

export const BackCard = styled.div`
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 4px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.1)
  );
  box-shadow: 0 0px 4px 0px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
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
  backface-visibility: hidden;
`;

type OptionProps = {
  color: string;
};
export const OptionContainer = styled.div<OptionProps>`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
  padding: 8px;
  cursor: pointer;

  :hover {
    color: ${({ color }) => color};
  }
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
`;

export const AboutContainer = styled.div`
  position: absolute;
  top: 4px;
  right: 12px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease-in-out;
  font-size: 24px;
  :hover {
    color: white;
  }
`;
