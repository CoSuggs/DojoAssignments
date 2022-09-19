import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const [formState, setFormState] = useState({
        option: "people",
        id: ""
    });
    const navigate = useNavigate();

    function onChangeHandler(event){
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }

    function onSubmitHandler(event){
        event.preventDefault();
        console.log(onSubmitHandler);

        navigate("/" + formState.option + "/" + formState.id)
    }
    return (
        <form onSubmit={onSubmitHandler} style={{textAlign: "center"}} >
            <label>Search For:</label>
                <select name="option" value={formState.option} onChange={onChangeHandler} >
                    <option value="people">People</option>
                    <option value="planet">Planet</option>
                </select>
            <label>ID:</label>
            <input name="id" value={formState.id} onChange={onChangeHandler} />
            <button>Submit</button>
        </form>
    );
}

export default SearchBar;