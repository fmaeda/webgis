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
  box-shadow: inset -4px 0px 2px -2px rgba(0, 0, 0, 0.25);
  z-index: 2;
  background: #3a3e4b;
  min-width: 60px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* position: absolute;
  top: 12px;
  left: 50%; */
  /* transform: translateX(-50%); */
  /* border-radius: 80px; */
  /* background-image: -webkit-radial-gradient(
    50% 0%,
    farthest-side ellipse,
    #7082ac 10%,
    #414c6a 120%
  ); */
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1)); */
`;

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: 120px;
  padding: 0 20px;
  /* padding: 0 40px 20px 40px; */
  /* border: solid black 1px; */
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    margin: 8px 0;
  `
      : `
    height: 100%;
    width: 1px;
    margin: 0 8px;
  `}
`;
