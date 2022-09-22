import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default props => {
    const { initialSetup, initialPunchline, onSubmitProp } = props;
    const [setup, setSetup] = useState(initialSetup);
    const [punchline, setPunchline] = useState(initialPunchline);
    const [joke, setJoke] = useState({
        setup: "",
        punchline: ""
    })
    const changeHandler = (e)=>{
        setJoke({
            ...joke,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = e => {
        // e.preventDefault(); // Commented out for instant refresh of page on submit
        axios.post("http://localhost:8000/api/joke", joke)
        .then(joke => {
            console.log(joke)
            setJoke({})
        })
        .catch(err => {
            console.log(err)
            // setJoke({})
        })
        // onSubmitProp({ setup, punchline });
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Setup</label><br />
                <input
                    type="text"
                    name="setup" 
                    // value={setup}
                    onChange={changeHandler} />
            </p>
            <p>
                <label>Punchline</label><br />
                <input
                    type="text"
                    name="punchline"
                    // value={punchline}
                    onChange={changeHandler} />
            </p>
            <input type="submit" />
        </form>
    )
}

