import styled from 'styled-components';

export const Container = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  align-items: center;
  gap: .8rem;
  padding: .8rem 3.5rem;
  box-shadow: 0px 0px 10px 1px rgba(0,0,0,.2);
  border-radius: 5px;
  font-size: 1.4rem;

  svg {
    width: 15px;
    height: 15px;
  }
`;
