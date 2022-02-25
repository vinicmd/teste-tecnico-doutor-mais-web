import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #6558F5;
    --blue: #2C88D9;
    --text: #000;
    --text-white: #FFF;
    --green: #207868;
    --red: #D3455B;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, text-area, button {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`
