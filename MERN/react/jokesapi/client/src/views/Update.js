import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import JokeForm from '../components/JokeForm';

const Update = (props) => {
    const { id } = useParams();
    const [setup, setSetup] = useState('');
    const [punchline, setPunchline] = useState('');
    const [joke, setJoke] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/joke/' + id)
            .then(res => {
                setJoke(res.data);
                setLoaded(true);
            })
    }, [])

    const updateJoke = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/joke/${id}`, {setup, punchline})
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    return (
        <div>
            {/* {loaded && (
                <JokeForm
                    onSubmitProp={updateJoke}
                    initialSetup={joke.setup}
                    initialPunchline={joke.punchline}
                />
            )} */}

            <h1>Update a Joke</h1>
            <form onSubmit={updateJoke}>
                <p>
                    <label>Setup</label><br />
                    <input type="text"
                        name="setup"
                        value={setup}
                        onChange={(e) => { setSetup(e.target.value) }} />
                </p>
                <p>
                    <label>Punchline</label><br />
                    <input type="text"
                        name="punchline"
                        value={punchline}
                        onChange={(e) => { setPunchline(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Update;

