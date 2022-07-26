import React from 'react'
import Router from './router/Router'
import GlobalState from './contexts/GlobalState'
import { ThemeProvider } from '@mui/material'
import theme from './constants/theme'
import { createGlobalStyle } from 'styled-components'

const App = () => {

  const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto" !important;
  }

  p, h4, h6 {
    margin: 0;
  }

`;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>

  )
}

export default App