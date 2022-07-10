import React,{useState,useEffect} from 'react'
import TweetBox from "./TweetBox";
import "./Feed.css";
import db from "./firebase";
import Post from "./Post";
function Feed() {

    const[posts,setPosts] = useState([]);

    useEffect(() =>{
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc)=> doc.data()))
        );
    },[]);

    return (
        <div className = "feed">

            <div className = "feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            {
                posts.map((post) => (
                    <Post 

                    key = {post.text}
                    displayName = {post.displayName}
                    username = {post.username}
                    verified = {post.verified}
                    text = {post.text}
                    avatar = {post.avatar}
                    />

                ))

            }

        </div>
    );
}

export default Feed
