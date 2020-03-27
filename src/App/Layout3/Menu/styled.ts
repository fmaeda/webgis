import styled from 'styles';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  /* justify-content: center; */
  /* border: solid yellow; */
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  align-items: center;
  justify-content: center;
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
  border-left: 2px solid transparent;
  :hover {
    color: white;
  }

  > svg {
    font-size: 24px;
  }
  ${({ active, color }) =>
    active &&
    `
    border-right: 2px solid ${color};
    margin-right: -2px;
    /* border-radius: 2px 0 0 2px; */
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0px 20px 0px rgba(0, 0, 0, 0.2);
    color: white;
    cursor: default;
  `}
`;

export const Spacer = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  width: 70%;
`;
