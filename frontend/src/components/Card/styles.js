import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: .5rem;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  max-width: 270px;
  overflow: hidden;
  cursor: pointer;
  transition: all .2s;
  position: relative;
  color: ${({ theme }) => theme.colors.text};

  :hover {
    transform: translateY(-2%);
    box-shadow: ${({ theme }) => theme.boxShadow.secondary};
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  div {
    padding: 2rem 2rem 3rem;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.4rem;
      margin-bottom: .5rem;

      span {
        font-size: 1.4rem;
        font-weight: 600;
      }
    }
  }
`;
