import styled from 'styles';

export const CardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0px 28px;
  border: 0;
  /* border: solid lime; */
  > table {
    width: 100%;
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

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 12px 28px;
  text-align: justify;
  > p > a {
    margin-left: 8px;
    color: white;
    :visited {
      color: rgba(255, 255, 255, 0.1);
    }
  }
`;
