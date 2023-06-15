import styled from 'styled-components';

export const Container = styled.main`
  min-height: 80vh;
  max-width: 124rem;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};

  svg {
    width: 10rem;
  }

  h1 {
    font-size: 4rem;
    font-weight: 600;
  }

  span {
    font-size: 1.6rem;
  }
`;
