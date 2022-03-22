import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/98988930?s=400&u=365c5d473cf25e52a2518794935abb79e238c037&v=4" 
          nome="Raphael pereira cesar" 
          descricao="Oi, eu sou o Raphael Cesar. Natural de Brasília mas moro em João Pessoa. Sou formado em Engenharia de Alimentos pela UPFB e cursando Full stack pela labenu. Tenho inglês avançado, espanhol intermediário e francês iniciante."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://intrafrut.com.br/wp-content/uploads/2020/09/logocorrigida.png" 
          nome="Intrafrut" 
          descricao="trabalhei como engenheiro de controle de qualidade" 
        />
        
        <CardGrande 
          imagem="http://www.ufpb.br/antigo/sites/all/themes/ufquatorze/logo.png" 
          nome="Universidade Federal da Paraiba" 
          descricao=" estagiei no laboratoria de controle e qualidade." 
        />
      </div>
      <div>
        <CardPequeno 
          imagem="http://www.unirio.br/arquivologia/imagens/logo%20email.png/image_preview" 
          nome=" Email" 
          descricao="raphapcvale@gmail.com" 
        />

        <CardPequeno 
          imagem="https://www.lamel.com.br/fotos/1808269052-map-1272165_960_720.png" 
          nome=" Endereço" 
          descricao="Avenida Guarabira, manaira, João pessoa-Paraiba." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
