//post detail page 
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FcLike } from "react-icons/fc";

const Details = () => {
    const [post, setPost] = useState([])
    const [likes, setLikes] = useState(0)

    //getting url parameter
    const { id } = useParams()
    const getPost = async () => {
        await fetch(`http://localhost:8080/posts/${id}`)
            .then(res => res.json())
            .then(res => {
                //update state to contain res
                setPost(res)
            })
    }

    const getLikes = async () => {
        await fetch(`http://localhost:8080/posts/${id}/likes`)
            .then(res => res.json())
            .then(res => {
                //update state to contain res
                setLikes(res.count)
            })
    }

    const addLikes = async () => {
        await fetch(`http://localhost:8080/posts/${id}/likes`, {method:"post"})
            .then(res => res.json())
            .then(res => {
                //update state to contain res
                getLikes()
            })
    }

    const handleAddLikes = ()=>{
        addLikes()
    }

    useEffect(() => {
        getPost()
        getLikes()
    }, [])
    return (
        <div className="details-page">
            <div className="detail-img">
                <img src={post.image} alt="" />
            </div>
            <h1>{post.title}</h1>
            <div className="detail-content">
                <p>{post.content}</p>
            </div>
            <div className="detail-likes">
            <h2 onClick={handleAddLikes}>{likes} likes <FcLike /> </h2>
            </div>
        </div>
    )
}

export default Details;