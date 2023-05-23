import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
  border-radius: .5rem;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 1.4rem;
    font-weight: 600;
    text-align: left;
    margin-right: 2rem;
    color: ${({ theme }) => theme.colors.text};
  }

  svg {
    width: 15px;
    height: 15px;
    transform: ${({ menuOpen }) => (menuOpen ? 'rotate(180deg)' : 'initial')} ;
    transition: all .2s;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Menu = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: .5rem;
  border-radius: .5rem;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
  padding: 1.5rem 2rem;
  position: absolute;
  top: 50px;
  width: 100%;
  opacity: 0;
  z-index: -1;
  transform: translateY(-5px);
  transition: all .3s;
  color: ${({ theme }) => theme.colors.text};

  div {
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;

    :hover {
      font-weight: 800;
    }
  }

  div + div {
    margin-top: .5rem;
  }

  ${({ show }) => {
    switch (show) {
      case true:
        return css`
        opacity: 1;
        transform: translateX(0);
        z-index: 1;
      `;
      default:
        return null;
    }
  }}
`;
