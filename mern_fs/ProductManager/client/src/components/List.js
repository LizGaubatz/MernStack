import axios from 'axios';
import React from 'react'
import { Link, useParams } from 'react-router-dom';


const List = (props) => {
    const { id } = props;
    
    // const { deleteFrom } = props;

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/product/delete/' + id)
            .then(res => {
                console.log('delete')
                props.refresh()
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {props.product.map( (product, i)=>
            <div key ={i}>
                <Link to={`/product/${product._id}`}> {product.title}</Link> | 
                | <Link to={"/product/" + product._id + "/edit"}>Edit</Link> |
                | <button onClick={() => { deleteProduct(product._id) }}>Delete</button>
            </div>
            )}
        </div>
    )
}

export default List;