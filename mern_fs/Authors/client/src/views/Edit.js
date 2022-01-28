import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Edit = () => {
    const { id } = useParams()

    let [authorInfo, setAuthorInfo] = useState({
        name: "",
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log(res)
                setAuthorInfo(res.data);
            })
            .catch(err => console.log(err))
    },[]);

    const history = useHistory();

    const changeHandler = (e) => {
        console.log("changed in form detected!!")
        setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
        })
    }

    const editAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/edit/${id}`, authorInfo)
            .then(res => {
                console.log(res)
                history.push("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h3> Edit this Author </h3>
            <Link to='/' >Home</Link>
            <form onSubmit={editAuthor}>
                <p>
                    <label> Name: </label><br />
                    <input type="text"
                        name="name"
                        value={authorInfo.name}
                        onChange={changeHandler} />
                </p>
                <button type ="button" className="btn btn-primary m-3" onClick = {(e)=>{history.push("/")}}>Cancel</button>
                <input type="submit" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default Edit;