import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const Blog = ({ blog, deleteble, handelDelete }) => {
    const { id, cover_image, title, description, published_at } = blog;
    // console.log(blog)
    return (
        <div className=" flex relative">
            <Link to={`/blogconten/${id}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group transition border-2 p-2 hover:border-secondary border-opacity-30 hover:scale-105 hover:no-underline focus:no-underline dark:bg-gray-50">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {
                deleteble && <div onClick={() => handelDelete(id)} className=" absolute right-10 w-12 h-12 cursor-pointer bg-slate-200 flex justify-center items-center rounded-full ml-5 text-secondary text-2xl"><MdDeleteForever /></div>
            }
        </div>
    );
};

export default Blog;