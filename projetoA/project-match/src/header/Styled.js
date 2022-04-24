import styled from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#e45b71'
      },
      secondary: {
        main: '#00a68f'
      },
    },
  });

export const HeaderSection = styled.div`
  padding: 5px;
  border-bottom: 2px solid #bebebe;
  border-radius: 10px;
    img {
        width: 150px
    }
    .logo-chat {
        display: grid;
        grid-template-columns: 60px 1fr 60px;
        img {
          grid-column: 2;
          justify-self: center;
        }
        #conf-home {
          grid-column: 1;
        }
    }
    .chat-logo {
      display: grid;
      grid-template-columns: 60px 1fr 60px;
      img {
          justify-self: center;
        }
    }
    
`