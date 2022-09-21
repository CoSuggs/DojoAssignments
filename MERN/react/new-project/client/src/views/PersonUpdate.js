import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import PersonForm from '../components/PersonForm';

const Update = (props) => {
    const { id } = props;
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, [])
    const updatePerson = person => {
        axios.put('http://localhost:8000/api/people/' + id, person)
            .then(res => console.log(res));
    }

    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson}>
                {loaded && (<PersonForm
                    onSubmitProp={updatePerson}
                    initialFirstName={person.firstName}
                    initialLastName={person.lastName} />
                )}
                <input type="submit" />
            </form>
        </div>
    )
}

export default Update;

// ...
// const { id } = props;
// const [person, setPerson] = useState();
// const [loaded, setLoaded] = useState(false);
// useEffect(() => {
//     axios.get('http://localhost:8000/api/person/' + id)
//         .then(res => {
//             setPerson(res.data);
//             setLoaded(true);
//         })
// }, [])
// const updatePerson = person => {
//     axios.put('http://localhost:8000/api/person/' + id, person)
//         .then(res => console.log(res));
// }
// ...
// //In our return
// {
//     loaded && (<PersonForm
//         onSubmitProp={updatePerson}
//         initialFirstName={person.firstName}
//         initialLastName={person.lastName}
//     />
//     )
// }

