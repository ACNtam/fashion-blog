import { useState, useEffect } from "react";
import Post from "./Post";


const Posts = () => {

    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        await fetch("http://localhost:8080/posts")
            .then(res => res.json())
            .then(res => {
                //update state to contain res
                setPosts(res)
            })
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="posts-page">
            <div className="latest">
                {posts.map((post, index) => {
                    return <Post key={index} post={post} index={index} />
                })}
            </div>
        </div>
    )
}

export default Posts;