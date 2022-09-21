import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AuthorList = (props) => {
    const { removeFromDom } = props;

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h3>All My Favorite Authors</h3>
            {props.authors.map((author, idx) => {
                return <p key={idx}>
                    <Link to={"/author/" + author._id}>
                        {author.lastName}, {author.firstName}
                    </Link>
                    |
                    <button onClick={(e) => { deleteAuthor(author._id) }}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}

export default AuthorList;

