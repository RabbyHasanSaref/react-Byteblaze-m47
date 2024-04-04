import { useEffect, useState } from "react";
import { getBlogs } from "../../utilites/Utile";
import Blog from "../../component/Blogs/Blog";
import { deleteBlogs } from "../../utilites/Utile";
import Nodata from "../../component/Nodata/Nodata";

const Bookmark = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const storage = getBlogs()
        setBlogs(storage)
    }, [])

    const handelDelete = id => {
        deleteBlogs(id);
        const savedBlogs = getBlogs()
        setBlogs(savedBlogs)
    }

    if(blogs.length < 1) {
        return <Nodata notice='No Bookmarks Found' address='/blogs' lable='Browse Blogs'></Nodata>
    }

    return (
        <div>
            <div className="grid px-5 py-5 justify-center gap-5 lg:grid-cols-3">
                {
                    blogs.map(blog => <Blog handelDelete={handelDelete} deleteble={true} key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Bookmark;