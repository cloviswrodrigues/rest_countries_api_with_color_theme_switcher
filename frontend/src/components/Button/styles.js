import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  align-items: center;
  gap: .8rem;
  padding: .8rem 3.5rem;
  box-shadow: 0px 0px 10px 1px rgba(0,0,0,.2);
  border-radius: 5px;
  font-size: 1.4rem;
  position: relative;
  color: ${({ theme }) => theme.colors.text};

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  svg {
    width: 15px;
    height: 15px;
  }
`;
