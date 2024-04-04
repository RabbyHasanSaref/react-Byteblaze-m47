import toast from "react-hot-toast";
export const getBlogs = () => {
    let blogs = [];
    const storageBlogs = localStorage.getItem('blogs');
    if(storageBlogs){
        blogs = JSON.parse(storageBlogs);
    }
    return blogs;
}

//save 
export const saveBlogs = (blog) => {
    let blogs = getBlogs();
    const isExist = blogs.find(b => b.id === blog.id );
    if(isExist){
        return toast.error('Already Bookmark!');
    }
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    toast.success('Blog Bookmarked Successfully!');
}

//delete 
export const deleteBlogs = id => {
    let blogs = getBlogs()
    const remaining = blogs.filter(b => b.id !== id)
    localStorage.setItem('blogs', JSON.stringify(remaining))
    toast.success('Blog Removed from Bookmark!')
  }