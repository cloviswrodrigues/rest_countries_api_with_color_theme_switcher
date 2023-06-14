import styled from 'styled-components';
import { Device } from '../../assets/styles/variables';

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.secondary};
  min-height: calc(100vh - 70px);
`;

export const Section = styled.section`
  max-width: 124rem;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4rem;
  align-items: center;

  input {
    width: 30rem;
  }
`;

export const CountryLists = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6rem;
`;

export const NotFoundCountry = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;

  @media screen and (max-width: ${Device.mobile}){
    min-height: 20vh;
  }
`;
