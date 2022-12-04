import BiographyContent from './biography/Components/BiographyContent';
import BlogContent from './blog/components/BlogContent';
import TechnologyContent from './technology/components/technology';
import QueryContent from './query/components/QueryContent';
import "swiper/css/bundle";


export default function Home() {
  return (
    <div>
      <BiographyContent/>
      <BlogContent showTitle />
      <TechnologyContent />
      <QueryContent />
    </div>
  )
}
