import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Detail = (props) => {
    const [joke, setJoke] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/joke/' + id)
            .then(res => setJoke(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <p>Setup: {joke.setup}</p>
            <p>Punchline: {joke.punchline}</p>,
            <Link to={"/joke/" + joke._id + "/edit"}>
                Edit
            </Link>


        </div>
    )
}

export default Detail;

