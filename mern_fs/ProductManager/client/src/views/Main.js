import React, {useEffect, useState } from 'react' ;
import axios from 'axios';
import Form from "../components/Form"
import List from '../components/List';


const Main = (props) => {
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProduct(res.data);
                // setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [loaded]);

    const deleteFrom = productId => {
        setProduct(product.filter(product => product._id !== productId));
    }

    const refresh = () => {
        setLoaded(!loaded)
    }

    return (
        <div>
            <Form refresh = {refresh}/>
            <hr/>
            {product && <List product = {product} refresh ={refresh}/>}
        </div>
    )
}

export default Main;