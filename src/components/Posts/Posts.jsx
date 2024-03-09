import { useEffect } from "react";
import { useState } from "react";
import Post from "../Post/Post";

const Posts = () => {
    const [posts, usePosts] = useState([]);

    const loadData = async () => {
        const res = await fetch(
            "https://openapi.programming-hero.com/api/retro-forum/posts"
        );
        const data = await res.json();
        usePosts(data.posts);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="flex justify-center gap-8">
            <div className="w-3/5">
                {posts.map((post) => (
                    <Post key={post.id} post={post}></Post>
                ))}
            </div>
            <div className="w-1/4"></div>
        </div>
    );
};

export default Posts;
