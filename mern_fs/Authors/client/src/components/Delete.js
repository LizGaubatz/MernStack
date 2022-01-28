import axios from 'axios'
// import { useParams } from 'react-router-dom'


const Delete = (props) => {
    
    const deleteAuthor = () => {
        axios.delete(`http://localhost:8000/api/author/delete/${props.id}`)
        .then(res => {
            console.log("response when deleting", res)
            props.reload()
        })
        .catch(err => console.log(err))
    }
    return (
        
        <button onClick={deleteAuthor} type="button"  className="btn btn-danger">Delete</button>
        
    )
}

export default Delete;