import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JokeList = (props) => {
    const { removeFromDom } = props;

    const deleteJoke = (jokeId) => {
        axios.delete('http://localhost:8000/api/joke/' + jokeId)
            .then(res => {
                removeFromDom(jokeId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h3>All My Favorite Jokes</h3>
            {props.jokes.map((joke, idx) => {
                return <p key={idx}>
                    <Link to={"/joke/" + joke._id}>
                        {joke.setup}, {joke.punchline}
                    </Link>
                    |
                    <button onClick={(e) => { deleteJoke(joke._id) }}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}

export default JokeList;

