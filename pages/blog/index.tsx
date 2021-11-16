import BlogPageContent from './components/BlogPageContent'
import QueryContent from "../query/components/QueryContent"
import { PostProps } from './components/BlogContent';

export default function Blog(post: PostProps) {
    return(
        <div>
            <BlogPageContent Titulo={post.Titulo} coverImage={post.coverImage} _id={post._id}/>
            <QueryContent />
        </div>
    )
}