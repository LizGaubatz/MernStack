import Form from "../components/Form";
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";

export default () => {
    const [authors, setAuthors] = useState([]);

    const history = useHistory();

    // const refresh = () => {
    //     setLoaded(!loaded)
    // }

    const newAuthor = authors => {
        axios.post('http://localhost:8000/api/product/new', authors)
        .then(res => {
            history.push('/api/author')
            // props.reload()
        })
        .catch(err => console.log(err))
    }
    return (
        
        <div className="container">
            <h3> Edit this Author </h3>
            <Link to='/' >Home</Link>
            <Form
                onSubmitProp = {newAuthor}
                initialName=''
            />
        </div>
        
    )

}