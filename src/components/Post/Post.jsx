import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { FaRegEnvelopeOpen } from "react-icons/fa6";

const Post = ({ post }) => {
    console.log(post);
    const {
        category,
        title,
        comment_count,
        description,
        image,
        isActive,
        posted_time,
        view_count,
        author,
    } = post;
    return (
        <div>
            <div className=" bg-primary text-primary-content flex gap-5 mt-5 rounded-2xl p-5">
                <div className="">
                    {
                        <img
                            width={"70px"}
                            className="rounded-2xl"
                            src={image}
                            alt=""
                        />
                    }
                </div>
                <div className="">
                    <span>#{category}</span>
                    <span className="ml-8">Author: {author.name}</span>
                    <h2 className="card-title py-2">{title}</h2>
                    <p>{description}</p>
                    <div className="flex border-t-2 border-dashed  mt-3 items-center justify-between pt-5">
                        <div className=" flex gap-10">
                            <div className="flex items-center gap-2">
                                <BiMessageDetail />
                                <span>{comment_count}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdOutlineRemoveRedEye />
                                <span>{view_count}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdAccessTime />
                                <span>{view_count}</span>
                            </div>
                        </div>
                        <div className="bg-[tomato] p-3 rounded-full text-[20px] cursor-pointer">
                            <FaRegEnvelopeOpen />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
