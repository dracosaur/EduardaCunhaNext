import { Header } from "../components/Header"
import { Footer } from '../components/Footer'
import { QueryContent } from "../query/components/QueryContent"
import { TechnologyPageContent } from './components/TechnologyPageContent';


export default function Blog() {
    return(
        <div>
            <Header />
            <TechnologyPageContent />
            <QueryContent />
            <Footer />
        </div>
    )
}