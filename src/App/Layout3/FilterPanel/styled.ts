import styled from 'styles';

type OpenProps = {
  open: boolean;
};
export const Container = styled.div<OpenProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  transition: all 0.2s ease-in-out;

  display: flex;
  flex-direction: row;
  ${({ open }) =>
    open
      ? `
    width: 40vw;
  `
      : `
    width: 120px;
  `};
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: rgba(0, 0, 0, 0.25);
  z-index: 2;
  filter: drop-shadow(-4px 0px 4px rgba(0, 0, 0, 0.3));
  backdrop-filter: blur(3px);
`;

export const HandleContainer = styled.div<OpenProps>`
  display: flex;
  position: absolute;
  /* top: 0; */
  top: 50%;
  right: ${({ open }) => (open ? '40vw' : '120px')};
  transform: translate(0, -50%);
  cursor: pointer;
  padding: 28px 4px 28px 4px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 4px 0 0 4px;
  transition: all 0.2s ease-in-out;
  backdrop-filter: blur(3px);
  filter: drop-shadow(-4px 0px 4px rgba(0, 0, 0, 0.3));
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-right: none;

  > svg {
    margin-right: -4px;
    transition: all 0.2s ease-in-out;
    color: rgba(255, 255, 255, 0.5);
    font-size: 10px;
  }

  :hover {
    background: rgba(255, 255, 255, 0.1);
    > svg {
      color: white;
      transform: translateX(${({ open }) => (open ? '2px' : '-2px')});
    }
  }
`;
