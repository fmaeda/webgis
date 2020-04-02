import styled from 'styles';
import background from 'resources/svg/bg-pattern.svg';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1;
  /* background: #666c72; #252C37 */
  /* background: linear-gradient(to top right, #4e598f, #32313a);
  background: linear-gradient(to bottom, #474959, #333541);
  background: linear-gradient(to top, #52535a, #2d2d31); */

  background-image: url(${background}),
    -webkit-radial-gradient(60% 0, farthest-side ellipse, #596276 10%, #2d313e);
  background-size: cover;
  background-attachment: fixed, fixed;
  /* border: solid red; */
  color: whitesmoke;
`;

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
  min-width: 60px;

  box-shadow: inset -4px 0px 2px -2px rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(3px);
  /* filter: drop-shadow(-4px 0px 4px rgba(0, 0, 0, 0.3)); */
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
`;

export const MainRouteContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: 120px;
  padding: 0 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  align-self: stretch;
  /* padding: 12px 20px; */

  font-size: 20px;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.75);
`;

type DividerProps = {
  orientation?: 'horizontal' | 'vertical';
};
export const Divider = styled.div<DividerProps>`
  display: flex;
  background: rgba(255, 255, 255, 0.25);
  ${({ orientation = 'horizontal' }) =>
    orientation === 'horizontal'
      ? `
    width: 100%;
    height: 1px;
  `
      : `
    height: 100%;
    width: 1px;
  `}
`;
