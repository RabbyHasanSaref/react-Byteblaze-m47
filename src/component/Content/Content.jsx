import { useLoaderData } from "react-router-dom";
import Markdown from 'https://esm.sh/react-markdown@9'
import rehypeRaw from 'https://esm.sh/rehype-raw@7'
const Content = () => {
    const content = useLoaderData()
    const {cover_image, title, published_at, tags, body_html} = content;
    // console.log(content)
    return (
        <div rel="noopener noreferrer" href="#" className="overflow-hidden mx-auto group  p-2  hover:no-underline focus:no-underline dark:bg-gray-50">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image} />
            <div>
                <div className="flex flex-wrap py-6 gap-2 dark:border-gray-600">
                    {
                        tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tag}</a>)
                    }
                </div>
            </div>
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                <p><Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown></p>
            </div>
        </div>
    );
};

export default Content;