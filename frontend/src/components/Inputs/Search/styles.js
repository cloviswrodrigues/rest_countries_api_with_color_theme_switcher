import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 45rem;
  border-radius: .5rem;
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
  position: relative;
  padding: 1.5rem;
  padding-left: 3rem;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;


  svg {
    width: 20px;
    fill: ${({ theme }) => theme.colors.tertiary};
  }

  input {
    position: absolute;
    top: 0;
    left: 7rem;
    width: 100%;
    height: 100%;
    font-size: 1.4rem;
  }
`;
