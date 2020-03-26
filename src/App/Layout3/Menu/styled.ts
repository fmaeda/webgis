import styled from 'styles';

export const Container = styled.div`
  /* position: absolute; */
  /* top: 50%; */
  /* transform: translateY(-50%); */
  display: flex;
  flex-direction: column;
  /* flex: 1; */
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  /* border: solid yellow; */
`;

type ItemProps = {
  active: boolean;
  color: string;
};
export const ItemContainer = styled.div<ItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  /* width: 100%; */
  margin: 12px 0 12px 2px;
  padding: 12px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: rgba(255, 255, 255, 0.5);
  border-left: 4px solid transparent;
  :hover {
    color: white;
  }

  > svg {
    font-size: 32px;
  }
  ${({ active, color }) =>
    active &&
    `
    border-left: 4px solid ${color};
    border-radius: 2px 0 0 2px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0px 4px 0px rgba(0, 0, 0, 0.2);
    color: white;
    cursor: default;
  `}
`;

export const Spacer = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  width: 70%;
`;
