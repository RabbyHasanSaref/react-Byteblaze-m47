import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { saveBlogs } from "../../utilites/Utile";

const Blogconten = () => {
    const blogs = useLoaderData()
    const [tabs, setTabs] = useState(0)
    const { title, published_at, reading_time_minutes, comments_count, public_reactions_count } = blogs;
    // console.log(blogs)

    const handleBookmark = blog => {
        console.log(blog)
        saveBlogs(blog)
    }
    return (
        <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                        <div className="flex items-center md:space-x-2">
                            <p className="text-sm"><span>{reading_time_minutes}</span> min read • {new Date(published_at).toLocaleDateString()}</p>
                        </div>
                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0"><span>{comments_count}</span> comments • {public_reactions_count} views</p>
                    </div>
                </div>
                {/* tab open  */}
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                    <Link
                        onClick={() => setTabs(0)}
                        className={`flex items-center flex-shrink-0 px-5 cursor-pointer py-3 space-x-2 ${tabs === 0 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Content</span>
                    </Link>
                    <Link
                        to='author'
                        onClick={() => setTabs(1)}
                        className={`flex items-center flex-shrink-0 cursor-pointer px-5 py-3 space-x-2 ${tabs === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Author</span>
                    </Link>
                    <div onClick={()=> handleBookmark(blogs)} className="w-12 h-12 cursor-pointer bg-slate-200 flex justify-center items-center rounded-full ml-5 text-secondary text-2xl">
                        <MdBookmarkAdd></MdBookmarkAdd>
                    </div>
                </div>
                <Outlet></Outlet>
                {/* tab end  */}
            </article>
        </div>
    );
};

export default Blogconten;