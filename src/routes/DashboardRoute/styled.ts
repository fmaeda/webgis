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
  /* justify-content: space-evenly; */
  /* border: solid lime; */
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  margin: 20px;
  /* background: rgba(255, 255, 255, 0.25); */
  border-radius: 4px;
  /* border: solid red; */
`;

export const CardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0px 28px;
  border: 0;
  /* border: solid lime; */
  > table {
    border-collapse: collapse;
    > thead > tr > th {
      padding-bottom: 12px;
      text-align: start;
    }
    > tbody > tr {
      border-radius: 4px;
      transition: all 0.2s ease-in-out;
      :hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }
`;
