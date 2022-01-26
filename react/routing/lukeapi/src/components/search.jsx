import React from 'react';
import { useState } from 'react';

const Search = (props) => {
    const {history} = props;
    const [type, setType] = useState("")
    const [id, setId] = useState("")
    const newRoute = e => {

        e.preventDefault();
        history.push("/" + type + "/" + id);

    }

    return (
        <div>
            <form onSubmit={ newRoute }>
                <p>Search for: </p>
                <select onChange={e => setType(e.target.value)} >
                    <option value="err">Please Select</option>
                    <option value="people">Person</option>
                    <option value="planets">Planet</option>
                </select>
                <input onChange={e => setId(e.target.value)} type="number" min={1} />
                <button>Search</button>
            </form>
        </div>
    )
};

export default Search;
