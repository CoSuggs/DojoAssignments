import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  function fetchPokemon() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        console.log(response.data.results);
        setPokemon(response.data.results);
      })
      .catch(error => console.log(error));
  }

  return (
    <div style={{ textAlign: "center" }}  >
      <div>
        <button onClick={fetchPokemon}>Fetch All Pokemon</button>
      </div>
      <hr />
      <div>
        {pokemon.map(pokemon => (
          <p key={ pokemon.name }>{ pokemon.name }</p>
        ))}
      </div>

    </div>
  );
}

export default App;
