import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import BlogPost from './BlogPost';
import { LineSmall } from '../../components/Line';


const BlogContainer = styled.div`
    display: flex;
    text-aling: center;
    flex-direction: column;
    padding: 30px 24px;
    align-items: center;
`

const TitleBlog = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;

    p { 
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-size: 16px;
        font-weight: 800;
        color: #F7AF35;
        text-transform: uppercase;
        margin-bottom: 16px;
    }
`

export function BlogContent(){
    return(
        <BlogContainer>
            <TitleBlog>
                <p>Blog</p>
               <LineSmall />
            </TitleBlog>
            <Grid>
               <BlogPost />
            </Grid>
            <Grid>
               <BlogPost />
            </Grid>
            <Grid>
               <BlogPost />
            </Grid>
        </BlogContainer>
    )
}