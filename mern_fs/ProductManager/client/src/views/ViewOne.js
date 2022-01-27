import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


const ViewOne = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    });

    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
            .then(res => {
                console.log("response when deleting", res)
                history.push("/")
            })
            .catch(err => console.log(err))
    }


    return (
        product ?
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/product/" + product._id + "/edit"}>Edit</Link>
            <button onClick={deleteProduct}>Delete</button>
        </div>
            : <p></p>

    )
}

export default ViewOne;