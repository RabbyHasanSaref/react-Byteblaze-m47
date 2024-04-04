import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home/Home';
import Blog from '../pages/Blog/Blog';
import Bookmark from '../pages/Bookmark/Bookmark';
import MainPage from "../pages/MainPage";
import Blogconten from "../pages/Blog/Blogconten";
import Content from "../component/Content/Content";
import Author from "../component/Author/Author";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage></MainPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/blogs",
                element: <Blog></Blog>,
                loader: () => fetch('https://dev.to/api/articles?per_page=30&top=7')
            },

            {
                path: "/blogconten/:id",
                element: <Blogconten></Blogconten>,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                children: [
                    {
                        index: true,
                        element: <Content></Content>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params?.id}`)
                    },
                    {
                        path: "author",
                        element: <Author></Author>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params?.id}`)
                    }
                ]
            },

            {
                path: "/bookmarks",
                element: <Bookmark></Bookmark>
            }
        ]
    },
]);