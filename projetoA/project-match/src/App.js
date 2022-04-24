import React, { useState } from 'react'
import Header from './Components/Header/Header';
import Perfil from './Components/perfil/Perfil';
import Match from './Components/Match/Match';
import Conversas from './Components/Chat/Conversas';
import {Main, Home, Settings} from './styledGlobal'
import {ThemeProvider } from '@material-ui/core/styles';
import {theme} from './styledGlobal'
import Setting from './Components/Setting/Setting';
import GlobalStyle from './global'

const urlBase = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raphael-cesar-shaw/person"

function App() {

  const [id, setId] = useState("")
  const [render, setRender] = useState("home")
  const [newPerfil, setNewPerfil] = useState(false)

  const idProfile = (id) => {
    setId(id)
  }

  const renderPag = (pag) => {
    setRender(pag)
  }

  const atualizaPerfil = () => {
    setNewPerfil(!newPerfil);
  }

  switch (render) {
    case "home":
      return (
        <ThemeProvider theme={theme}>
          <Main>
            <Home>
              <Header
                renderPag={renderPag}
                render={render}
              />
              <Perfil
                urlBase={urlBase}
                idProfile={idProfile}
                newPerfil={newPerfil}
              />
              <Match
                urlBase={urlBase}
                id={id}
                atualizaPerfil={atualizaPerfil}
              />
            </Home>
          </Main>
          <GlobalStyle />
        </ThemeProvider>
      )
    case "chat":
      return (
        <ThemeProvider theme={theme}>
          <Main>
            <div>
              <Header
                renderPag={renderPag}
                render={render}
              />
              <Conversas
                urlBase={urlBase}
              />
            </div>
          </Main>
          <GlobalStyle />
        </ThemeProvider>
      )
    case "setting":
      return (
        <ThemeProvider theme={theme}>
          <Main>
            <Settings>
              <Header
                renderPag={renderPag}
                render={render}
              />
              <Setting 
                urlBase={urlBase}
              />
            </Settings>
          </Main>
          <GlobalStyle />
        </ThemeProvider>
      )
    default:
      break;
  }
}
export default App;