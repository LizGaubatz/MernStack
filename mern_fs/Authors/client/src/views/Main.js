import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Delete from '../components/Delete';
// import List from '../components/List';
// import { mapReduce } from '../../../server/models/author.model';


const Main = (props) => {
    const [authors, setAuthors] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                setAuthors(res.data);
                // setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [loaded]);


    const reload = () => {
        // history.push('/')
        setLoaded(!loaded)
    }

    return (
        <div className="container">
            <Link to='/author/new'>Add an author</Link>
            <p>We have quotes by:</p>
            <table className="table striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th >Author</th>
                        <th colSpan={2}>Actions Available</th>
                    </tr>
                </thead>
                {authors ?
                    authors.map((author, i) => {
                        return (
                        <tbody key={i}>
                            <tr>
                                <td>
                                    {author.name}
                                </td>
                                <td>
                                <Link to={`/author/edit/${author._id}`} className="btn btn-primary">Edit</Link>
                                </td>
                                <td>
                                <Delete reload={reload} id={author._id}></Delete>
                                </td>
                            </tr>
                        </tbody>
                    )}) : <tr>None</tr>}
            </table>
        </div>
    )
}

export default Main;