import { BiographyContent } from './biography/Components/BiographyContent';
import { BlogContent } from './blog/components/BlogContent';
import styled from 'styled-components';
import {TechnologyContent} from './technology/components/technology';
import { QueryContent } from './query/components/QueryContent';
import { CasesContent } from './cases/components/CasesContent';

const Container = styled.div`

`

export default function Home() {
  return (
    <div>
      <BiographyContent/>
      <BlogContent showTitle />
      <TechnologyContent />
      <CasesContent />
      <QueryContent />
    </div>
  )
}
