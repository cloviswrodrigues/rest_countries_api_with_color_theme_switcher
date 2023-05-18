import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.secondary};
  min-height: calc(100vh - 70px);
`;

export const Section = styled.section`
  max-width: 120rem;
  margin: 0 auto;
  padding: 4rem 0;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: 30rem;
  }
`;

export const CountryLists = styled.ul`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6rem;
`;
