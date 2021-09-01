import { Header } from "../components/Header"
import { Footer } from '../components/Footer'
import { CasesPageContent } from './components/CasesPageContent'
import { QueryContent } from "../query/components/QueryContent"

export default function Blog() {
    return(
        <div>
            <Header />
            <CasesPageContent />
            <QueryContent />
            <Footer />
        </div>
    )
}