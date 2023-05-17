import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
  border-radius: .5rem;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 1.4rem;
    text-align: left;
    margin-right: 4rem;
  }

  svg {
    width: 15px;
    height: 15px;

  }
`;
