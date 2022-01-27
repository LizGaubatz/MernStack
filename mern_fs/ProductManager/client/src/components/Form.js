import React, { useState } from 'react';
import axios from 'axios';
// import { useHistory } from "react-router-dom";

const Form = (props) => {
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState(0);
    let [description, setDescription] = useState("");

    // const history = useHistory();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let formRes = {title, price, description}

        axios.post('http://localhost:8000/api/product/new', formRes)
            .then(res => {
                console.log("Response: ", formRes)
                props.refresh()
                // history.push('/api/product')
            })
            .catch(err => console.log("Error: ", err))
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title: </label>
                <input type = "text" onChange={e => setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price: </label>
                <input type="number" onChange={e => setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description: </label>
                <input type="text" onChange={e => setDescription(e.target.value)}/>
            </p>
            <input type="submit" />
        </form>
    )

}

export default Form;





