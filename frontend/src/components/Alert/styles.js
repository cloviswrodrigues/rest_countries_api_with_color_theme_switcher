import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.text};
  fill: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  svg {
    max-width: 11rem;
    margin-bottom: 1rem;
  }

  span {
    font-size: 1.4rem;
  }
`;
