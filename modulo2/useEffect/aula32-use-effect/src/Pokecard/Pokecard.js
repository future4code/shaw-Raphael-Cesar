import React, {useEffect, useState} from "react";
import axios from "axios";

export default function PokeCard()   {
  const [pokemon, setpokemon] = useState({});
  };

  useEffect(() => {
      pegaPokemon(pokemon);

  }, []);

  useEffect((pokemon1) => {
      if (pokemon !== pokemon){
          pegaPokemon(pokemon);
      }
  }, [])

  const pegaPokemon = (pokeName) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
         .then(response => {
       
        setpokemon({ pokemon: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
 
      
  

    useEffect(() =>{
      getPokemon(props.pokemon);

    }, [props.pokemon]) 
    const pokemon = this.state.pokemon;

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
}


