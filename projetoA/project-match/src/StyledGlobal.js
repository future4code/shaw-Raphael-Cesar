import styled from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles';
export const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#ef9fac',
        main: '#e45b71',
        dark: '#db2442',
      },
      secondary: {
        light: '#00d0b3',
        main: '#00a68f',
        dark: '#008572',
      },
    },
  });


export const Main = styled.div`
  width: 400px;
  height: 650px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #f9f9f9;
`

export const Home = styled.div`
  display: grid;
  grid-template-rows: auto 490px auto;
`

export const Settings = styled.div`
  height: 70%;
`