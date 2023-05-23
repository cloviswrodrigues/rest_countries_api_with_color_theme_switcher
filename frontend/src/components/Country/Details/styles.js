import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8rem;
  display: flex;
  gap: 12rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Flag = styled.div`
  width: 600px;
  height: 350px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CountryContainer = styled.div`
  padding: 4rem 0;
  width: 50%;
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

`;

export const CountryBorders = styled.div`
  margin-top: 5rem;
  display: flex;

  span {
    font-size: 1.4rem;
    font-weight: 600;
    min-width: 12rem;
  }

  ul {
    margin-left: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    li {
      font-size: 1.2rem;
      background-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0px 0px 4px rgba(0,0,0,.2);
      padding: .4rem 2rem;
    }
  }
`;
