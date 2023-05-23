import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Nunito Sans, sans serif;
    font-size: 10px;
  }

  body {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  button {
    background: none;
    border: none;
  }

  input {
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: initial;
    cursor: pointer;
  }

  li {
    list-style: none;
  }
`;
