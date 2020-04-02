import styled from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-evenly;
  /* margin: 16px 20px; */
  opacity: 0.7;
`;

export const Labels = styled.div`
  display: flex;
  flex-direction: column;
`;

type ItemProps = {
  color: string;
};
export const Item = styled.div<ItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 4px;
  color: whitesmoke;
  border-left: 6px solid ${({ color }) => color};
  padding-left: 8px;
`;
