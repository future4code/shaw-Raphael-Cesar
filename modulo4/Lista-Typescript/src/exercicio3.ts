enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror",
  }
  
  type Filme = {
    nome: string;
    ano: number;
    genero: string;
    pontuação ?: number | string;
  };
  
  function filmes(
    nome: string,
    ano: number,
    genero: GENERO,
    pontuação?: number
  ): Filme {
    return {
      nome: nome,
      ano: ano,
      genero: genero,
      pontuação: pontuação ? pontuação : "Sem pontuação",
    };
  }
  console.table(filmes("Americanan pie", 1999, GENERO.COMEDIA));