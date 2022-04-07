import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Raphael'}
          fotoUsuario={'https://avatars.githubusercontent.com/u/98988930?v=4'}
          fotoPost={'https://sm.ign.com/ign_br/screenshot/default/shaka-de-virgem-meditand_kq84.jpg'}
        />
        <Post
          nomeUsuario={'Cesar'}
          fotoUsuario={'https://d4-invdn-com.investing.com/company_logo/9e4050d5df5a0f2c0f169f8ccd5ff058.jpg?width=170&height=170'}
          fotoPost={'https://1.bp.blogspot.com/-tY60sEQZppY/YU6jXLHpC5I/AAAAAAAACHM/urUIcaXioq4VqkCUsVn36HbeeoA1uWEoACLcBGAsYHQ/w312-h175/Modo_B%25C3%25A1rion_%2528Anime%2529.png'}
        />
      </MainContainer>
    );
  }
}

export default App;
