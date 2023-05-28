import styled from 'styled-components';
import { Device } from '../../assets/styles/variables';

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.secondary};
  min-height: calc(100vh - 70px);
`;

export const Section = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  padding: 4rem 0;

  @media screen and (max-width: ${Device.mobile}){
    padding: 4rem 2rem;
  }
`;
