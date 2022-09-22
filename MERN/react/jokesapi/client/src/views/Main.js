import React, { useEffect, useState } from 'react'
import axios from 'axios';
import JokeForm from '../components/JokeForm';
import JokeList from '../components/JokeList';
export default () => {
    const [jokes, setJokes] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/joke')
            .then(res => {
                setJokes(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = jokeId => {
        setJokes(jokes.filter(joke => joke._id != jokeId));
    }
    const createJoke = joke => {
        axios.post('http://localhost:8000/api/joke', joke)
            .then(res => {
                setJokes([...jokes, res.data]);
            })
    }
    return (
        <div>
            <JokeForm onSubmitProp={createJoke} initialSetup="" initialPunchline="" />
            <hr />
            {loaded && <JokeList jokes={jokes} removeFromDom={removeFromDom} />}
        </div>
    )
}

