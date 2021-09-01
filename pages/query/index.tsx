import { Header } from "../components/Header"
import { Footer } from '../components/Footer'
import { QueryContent } from "../query/components/QueryContent"

export default function Blog() {
    return(
        <div>
            <Header />
            <h1>Cheiro de pneu queimado...</h1>
            <QueryContent />
            <Footer />
        </div>
    )
}