import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.text};
  fill: ${({ theme }) => theme.colors.text};
  max-width: 11rem;
  display: flex;
  flex-direction: column;
  text-align: center;

  span {
    font-size: 1.4rem;
  }
`;
