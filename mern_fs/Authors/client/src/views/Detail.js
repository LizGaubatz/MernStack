import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Delete from '../components/Delete';

export default (props) => {
    const [author, setAuthor] = useState({})
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => setAuthor(res.data))
            .catch(err => console.error(err));
    });

    const reload = () => {
        history.push('/')
    }


    return (
        author ?
            <div className="container">
                <table className="table table-bordered table-hover">
                    <thead bs-ta>
                        <tr>
                            <th>Author</th>
                        </tr>
                        <tr>
                            <th>Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{author.name}</td>
                        </tr>
                        <tr>
                            <Link to={"/author/" + author._id + "/edit"} className="btn btn-primary">Edit</Link>
                            <Delete reload = {reload} id = {id}/>
                        </tr>
                    </tbody>
                </table>
            </div>
            : <p></p>
    )
}
