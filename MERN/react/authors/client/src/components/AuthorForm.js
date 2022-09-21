import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default props => {
    const { initialFirstName, initialLastName, onSubmitProp } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const [author, setAuthor] = useState({
        firstName: "",
        lastName: ""
    })
    const changeHandler = (e)=>{
        setAuthor({
            ...author,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = e => {
        // e.preventDefault(); // Commented out for instant refresh of page on submit
        axios.post("http://localhost:8000/api/author", author)
        .then(author => {
            console.log(author)
            setAuthor({})
        })
        .catch(err => {
            console.log(err)
            // setAuthor({})
        })
        // onSubmitProp({ firstName, lastName });
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br />
                <input
                    type="text"
                    name="firstName" 
                    // value={firstName}
                    onChange={changeHandler} />
            </p>
            <p>
                <label>Last Name</label><br />
                <input
                    type="text"
                    name="lastName"
                    // value={lastName}
                    onChange={changeHandler} />
            </p>
            <input type="submit" />
        </form>
    )
}

