import styled from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: solid blue 1px;
  border-radius: 4px;
  background: tomato;

  transition: all 0.4s ease-in-out;

  :hover {
    cursor: pointer;
    background: lime;
    /* padding: 50px; */
  }
`;
