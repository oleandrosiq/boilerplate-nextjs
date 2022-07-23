import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.colors.background.dark2};
    color: ${({ theme }) => theme.colors.text.light1};
  }

  button {
    font-family: 'Roboto', sans-serif;

    border: 0;
    background: none;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  a {
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`
