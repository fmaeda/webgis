import styled from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Head = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: row;
  justify-content: space-evenly;
  /* border: solid red; */
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 20px;
  /* background: rgba(255, 255, 255, 0.25); */
  border-radius: 4px;
  /* border: solid red; */
`;
