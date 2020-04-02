import styled from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-evenly;
  /* border: solid red; */
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

type ItemProps = {
  selected: boolean;
};
export const ItemContainer = styled.div<ItemProps>`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin: 2px;
  transition: all 0.2s ease-in-out;
  :hover {
    color: whitesmoke;
  }
  > svg {
    margin-right: 8px;
  }
`;
