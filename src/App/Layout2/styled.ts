import styled from 'styles';
import background from 'resources/svg/bg-pattern.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  /* background: #666c72; #252C37 */
  /* background: linear-gradient(to top right, #4e598f, #32313a);
  background: linear-gradient(to bottom, #474959, #333541);
  background: linear-gradient(to top, #52535a, #2d2d31); */

  background-image: url(${background}),
    -webkit-radial-gradient(60% 0, farthest-side ellipse, #7082ac 10%, #414c6a);
  background-size: cover;
  background-attachment: fixed, fixed;
  /* border: solid red; */
`;

export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 28px 28px;
  border-radius: 12px;
  box-shadow: 0 0px 40px -4px rgba(0, 0, 0, 0.9);
  /* border: solid red; */
  background: rgba(0, 0, 0, 0.2);
  overflow: hidden;
  /* background: linear-gradient(to top, #454d7d, #1a1f42); */
`;

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-image: -webkit-radial-gradient(
    50% 200%,
    farthest-side ellipse,
    #7082ac 10%,
    #414c6a 120%
  );
  border-radius: 12px 12px 0 0;
  /* box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.2); */
  z-index: 2;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
  /* border: solid lime; */
  min-height: 54px;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 80px;
  background-image: -webkit-radial-gradient(
    50% 0%,
    farthest-side ellipse,
    #7082ac 10%,
    #414c6a 120%
  );
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1)); */
`;

export const RouteContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 2px;
  /* border: solid black 1px; */
`;

export const FilterContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  background-image: -webkit-radial-gradient(
    50% -100%,
    farthest-side ellipse,
    #7082ac 10%,
    #414c6a
  );
  justify-content: space-between;
  border-radius: 0 0 12px 12px;
  min-height: 80px;
  /* box-shadow: -2px 0px 4px -2px rgba(0, 0, 0, 0.5); */
  z-index: 2;
  filter: drop-shadow(0px -2px 4px rgba(0, 0, 0, 0.1));
`;

type FilterProps = {
  position: 'right' | 'left';
};
export const FilterPanel = styled.div<FilterProps>`
  position: absolute;
  display: flex;
  width: 24%;
  bottom: 0;
  height: 140px;
  ${({ position }) => `${position}: 0;`};
  /* flex: 1; */
  /* border: solid lime; */
  background-image: -webkit-radial-gradient(
    50% -200%,
    farthest-side ellipse,
    #7082ac 10%,
    #414c6a 120%
  );
  border-radius: 4px 4px 0 0;
`;

export const CenterFilterPanel = styled.div`
  position: absolute;
  bottom: 0;
  right: 50%;
  width: 50%;
  transform: translateX(50%);
  display: flex;
  flex: 1;
  height: 180px;
  background-image: -webkit-radial-gradient(
    50% -200%,
    farthest-side ellipse,
    #7082ac 10%,
    #414c6a 120%
  );
  border-radius: 4px 4px 0 0;

  /* border: solid red; */
`;
