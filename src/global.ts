import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #6558F5;
    --blue: #2C88D9;
    --text: #293845;
    --text-white: #FFF;
    --green: #207868;
    --red: #D3455B;
    --grey: #9EADBA;
    --grey-light: #ADBAC5;
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

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 600px;
    height: 100%;
    max-height: 300px;
    background: var(--text-white);
    padding: 12px;
    position: relative;
  }
`
