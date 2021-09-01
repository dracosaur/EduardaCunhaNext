import { Header } from "../components/Header";
import { Footer } from '../components/Footer';
import { BiographyPageContent } from './Components/BiographyPageContent'
import { QueryContent } from "../query/components/QueryContent";

export default function Biography(){
    return (
        <div>
            <Header />
            <BiographyPageContent />
            <QueryContent />
            <Footer />
        </div>
    )
}