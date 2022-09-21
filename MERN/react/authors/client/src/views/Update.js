import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import AuthorForm from '../components/AuthorForm';

const Update = (props) => {
    const { id } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])

    const updateAuthor = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/author/${id}`, {firstName, lastName})
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    return (
        <div>
            {/* {loaded && (
                <AuthorForm
                    onSubmitProp={updateAuthor}
                    initialFirstName={author.firstName}
                    initialLastName={author.lastName}
                />
            )} */}

            <h1>Update an Author</h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>First Name</label><br />
                    <input type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => { setFirstName(e.target.value) }} />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => { setLastName(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Update;

