import { useEffect } from "react";
import { useState } from "react";
import Post from "../Post/Post";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [save, setSave] = useState([]);

    // const markPost = [];

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

    const savePost = (id) => {
        const search = posts.find((x) => (x.id === id));
        console.log(search, id);
        setSave([...save, { title: search.title, view: search.view_count }]);
    };

    console.log(save);
    return (
        <div className="flex justify-center gap-8 mt-10">
            <div className="w-3/5">
                {posts.map((post, idx) => (
                    <Post key={idx} post={post} savePost={savePost}></Post>
                ))}
            </div>
            <div className="w-1/3">
                <div className="card  bg-primary text-primary-content">
                    {save && save.length > 0 ?                    <div className=" p-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-[20px] font-bold">Title</h2>
                            <p>
                                <IoCheckmarkDoneSharp className="inline" /> Mark
                                as read ({save.length})
                            </p>
                        </div>
                        <div className="flex flex-col justify-between items-center gap-1 bg-[#fff] text-[#000] p-3 rounded-2xl mt-4">
                            {save.map((x) =><div key={x.id}>
                                    <p>{x.title}</p>
                                    <MdOutlineRemoveRedEye className="text-[21px]" />
                                    <span className="ml-[3px]">{x.view}</span>
                                </div>
                            )}
                        </div>
                        {/* <div className="flex justify-between items-center gap-1 bg-[#fff] text-[#000] p-3 rounded-2xl mt-4">
                            <p>10 Kids Unaware of Their Halloween Costume</p>
                            <MdOutlineRemoveRedEye className="text-[21px]" />
                            <span className="ml-[3px]">{4567}</span>
                        </div> */}
                    </div> : ''}
                </div>
            </div>
        </div>
    );
};

export default Posts;
