import { Header } from "../components/Header"
import { Footer } from '../components/Footer'
import { BlogPageContent } from './components/BlogPageContent'
import { QueryContent } from "../query/components/QueryContent"

export default function Blog() {
    return(
        <div>
            <Header />
            <BlogPageContent />
            <QueryContent />
            <Footer />
        </div>
    )
}