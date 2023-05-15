import styled from 'styled-components';

export const Container = styled.header`
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 120rem;
  margin: 0 auto;
  padding: 2rem 0;

  h1 {
    font-size: 2.2rem;
  }

  button {
    display: flex;
    align-items: center;

    img {
      width: 1.5rem;
      margin-right: .5rem;
    }

    span {
      font-size: 1.4rem;
      font-weight: 800;
    }
  }
`;
