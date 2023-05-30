import styled from 'styled-components';
import { Device } from '../../../assets/styles/variables';

export const Container = styled.div`
  margin-top: 8rem;
  display: flex;
  gap: 12rem;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (max-width: ${Device.mobile}){
    margin-top: 6rem;
    flex-direction: column;
    gap: 0;
  }
`;

export const Flag = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 350px;
`;

export const CountryContainer = styled.div`
  padding: 4rem 0;
  width: 50%;

  @media screen and (max-width: ${Device.mobile}){
    width: 100%;
  }
`;

export const CountryName = styled.h2`
  font-size: 2.8rem;
`;

export const CountryDetails = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;

  p {
    margin-bottom: 1rem;
  }

  p, b {
    font-size: 1.4rem;
  }

  b {
    font-weight: 800;
  }

  @media screen and (max-width: ${Device.mobile}){
    flex-direction: column;

    div + div {
      margin-top: 3rem;
    }
  }
`;

export const CountryBorders = styled.div`
  margin-top: 5rem;
  display: flex;

  span {
    font-size: 1.6rem;
    font-weight: 600;
    min-width: 13rem;
  }

  ul {
    margin-left: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    li {
      display: contents;
    }

    a {
      font-size: 1.2rem;
      padding: .4rem 2rem;
      color: ${({ theme }) => theme.colors.text};
      background-color: ${({ theme }) => theme.colors.primary};
      box-shadow: ${({ theme }) => theme.boxShadow.tertiary};
    }
  }

  @media screen and (max-width: ${Device.mobile}){
    margin-top: 3rem;
    flex-direction: column;
    gap: 2rem;

    ul {
      margin-left: 0;
    }
  }
`;
