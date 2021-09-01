import { BiographyContent } from './biography/Components/BiographyContent';
import { BlogContent } from './blog/components/BlogContent';
import { Header } from './components/Header';
import styled from 'styled-components';
import {TechnologyContent} from './technology/components/technology';
import { QueryContent } from './query/components/QueryContent';
import { Footer } from './components/Footer';
import { CasesContent } from './cases/components/CasesContent';

const Container = styled.div`

`

export default function Home() {
  return (
    <div>
      <Header />
      <BiographyContent/>
      <BlogContent />
      <TechnologyContent />
      <CasesContent />
      <QueryContent />
      <Footer />
    </div>
  )
}
