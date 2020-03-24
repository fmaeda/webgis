import styled from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  /* background: #666c72; #252C37 */
  background: linear-gradient(to top right, #4e598f, #32313a);
  background: linear-gradient(to bottom, #474959, #333541);
  background: linear-gradient(to top, #52535a, #2d2d31);

  /* border: solid red; */
`;

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin: 28px 28px;
  border-radius: 12px;
  box-shadow: 0 4px 14px 4px rgba(0, 0, 0, 0.2);
  /* border: solid red; */
`;

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #34385a, #21284d);
  background: linear-gradient(to bottom, #3e4363, #1c1d25);
  background: linear-gradient(to bottom, #424348, #1a1a1c);
  border-radius: 12px 0 0 12px;
  box-shadow: 3px 0px 4px -2px rgba(0, 0, 0, 0.5);
  z-index: 2;
  /* border: solid lime; */
`;

export const RouteContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #424348, #1a1a1c);
  border-radius: 0 12px 12px 0;
  min-width: 200px;
  box-shadow: -2px 0px 4px -2px rgba(0, 0, 0, 0.5);
  z-index: 2;
`;
