export default function Banner() {
    return (
        <div className=" mx-auto h-[400px] bg-[#12132D] rounded-xl flex justify-center gap-16 items-center">
            <div className="text-[#fff] flex flex-col gap-5">
                <p className="text-5xl  font-extrabold">
                    Welcome to the <br /> ReTro Forum
                </p>
                <p>
                    Share your favorite opinion and win and wp forum coffee mug!
                </p>
                <div>
                    <input type="text" placeholder="Search here anything" />
                    <input
                        className="bg-[#797DFC] cursor-pointer"
                        type="button"
                        value="Search"
                    />
                </div>
            </div>
            <div className="h-[200px] w-[250px] bg-[#fff] rounded-2xl p-6">
                <div className="flex justify-between mb-3">
                    <p>Registered Users</p>
                    <p>01</p>
                </div>
                <div className="flex justify-between mb-3">
                    <p>Forum</p>
                    <p>07</p>
                </div>
                <div className="flex justify-between mb-3">
                    <p>Topics</p>
                    <p>03</p>
                </div>
                <div className="flex justify-between mb-3">
                    <p>Replies</p>
                    <p>01</p>
                </div>
            </div>
        </div>
    );
}
