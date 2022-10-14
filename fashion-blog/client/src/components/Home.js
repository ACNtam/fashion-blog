import { useState, useEffect } from "react";
import Post from "./Post";



const Home = () => {

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
        <div className="home-page">
            <div className="hero-section">
                    <img src="https://assets.vogue.com/photos/634820cef1508251cc546f0a/16:9/w_2580%2Cc_limit/00-story%25202.jpeg" alt="" />
            </div>
            {/* <div className="latest">
            {posts.slice(0,4).map((post, index) => {
                return <Post key={index} post={post} index={index} />
            })}
            </div> */}
        </div>
    )
}

export default Home;