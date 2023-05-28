import styled from 'styled-components';

import { Device } from '../../assets/styles/variables';

export const Container = styled.header`
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 124rem;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    a {
      font-size: 2.2rem;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  button {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};

    svg {
      width: 1.5rem;
      margin-right: .5rem;

      path {
        fill: ${({ theme }) => theme.colors.text};
      }
    }

    span {
      font-size: 1.4rem;
      font-weight: 800;
    }
  }

  @media screen and (max-width: ${Device.mobile}){
    h1 {
      a {
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.text};
      }
    }
    button {
      span {
        font-size: 1.2rem;
      }
    }
  }
`;
