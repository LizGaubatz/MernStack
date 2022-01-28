import React from 'react';
import { Link, useHistory  } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default (props) => {
    const {refresh} = props;
    const [name, setName] = useState("");
    const history = useHistory();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author/new", {name})
        refresh();
    }


    return (
        
        <div className="container">
            
            <form onSubmit={onSubmitHandler}>
                {/* <legend></legend> */}
                <div className="form-group">
                    <label for="">Name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            
        </div>
        
    );
}
