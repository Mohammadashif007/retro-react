import { useEffect } from "react";
import { useState } from "react";
import Post from "../Post/Post";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [save, setSave] = useState([]);

    const loadData = async () => {
        const res = await fetch(
            "https://openapi.programming-hero.com/api/retro-forum/posts"
        );
        const data = await res.json();
        setPosts(data.posts);
    };

    useEffect(() => {
        loadData();
    }, []);

    const savePost = (save) => {
        setSave(save);
    }
 
    console.log(save.title);
    return (
        <div className="flex justify-center gap-8 mt-10">
            <div className="w-3/5">
                {posts.map((post) => (
                    <Post key={post.id} post={post} savePost={savePost}></Post>
                ))}
            </div>
            <div className="w-1/3">
                <div className="card  bg-primary text-primary-content">
                    <div className=" p-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-[20px] font-bold">Title</h2>
                            <p>
                                <IoCheckmarkDoneSharp className="inline" /> Mark
                                as read ({save.length})
                            </p>
                        </div>
                        <div className="flex justify-between items-center gap-1 bg-[#fff] text-[#000] p-3 rounded-2xl mt-4">
                            <p>{save.title}</p>
                            <MdOutlineRemoveRedEye className="text-[21px]" />
                            <span className="ml-[3px]">{save.view}</span>
                        </div>
                        {/* <div className="flex justify-between items-center gap-1 bg-[#fff] text-[#000] p-3 rounded-2xl mt-4">
                            <p>10 Kids Unaware of Their Halloween Costume</p>
                            <MdOutlineRemoveRedEye className="text-[21px]" />
                            <span className="ml-[3px]">{4567}</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;
