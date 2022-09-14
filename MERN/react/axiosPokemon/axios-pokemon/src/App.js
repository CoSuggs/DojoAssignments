import React, { useEffect, useState } from 'react';
import axios from 'axios';
import App from './App';

const someComponent = props => {
  //Note the second argument is an empty array.
  const [responseData, setResponseData] = useState(null);
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/')
      .then(response => { setResponseData(response.data) })
  }, []);
  return (
    <div>
      {responseData}
    </div>
  )
}

