import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="hero bg-base-200 relative flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
            <div className="hero-content text-center">
                <div className="w-[600px]">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to <span className="font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-secondary text-transparent bg-clip-text bg-300% animate-gradient">ByteBlaze</span></h1>
                    <p className="mb-5">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
                    <div>
                        <Link to="/blogs" className="relative inline-block px-4 py-2 font-medium group mr-5">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                            <span className="relative text-black group-hover:text-white">Read Blogs</span>
                        </Link>

                        <Link to="/bookmarks" className="relative inline-block px-4 py-2 font-medium group mr-5">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                            <span className="relative text-black group-hover:text-white">Bookmarks</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;