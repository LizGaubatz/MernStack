import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'

const Update = () => {
    const { id } = useParams()

    let [productInfo, setProductInfo] = useState({
        title: "",
        price: 0,
        description: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log(res)
                setProductInfo(res.data);
            })
            .catch(err => console.log(err))
    },[]);

    const history = useHistory();

    const changeHandler = (e) => {
        console.log("changed in form detected!!")
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/update/${id}`, productInfo)
            .then(res => {
                console.log(res)
                history.push("/product")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1> Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label> Title: </label><br />
                    <input type="text"
                        name="title"
                        value={productInfo.title}
                        onChange={changeHandler} />
                </p>
                <p>
                    <label> Price: </label><br />
                    <input type="number"
                        name="price"
                        value={productInfo.price}
                        onChange={changeHandler} />
                </p>
                <p>
                    <label> Description: </label><br />
                    <input type="text"
                        name="description"
                        value={productInfo.description}
                        onChange={changeHandler} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Update;