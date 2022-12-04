import { useEffect, useState } from 'react';
import api from '../../../services/api';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import  BlogPost  from '../posts/BlogPost';
import { LineSmall } from '../../../components/Line';

export interface PostProps {
    _id: string;
    coverImage: string;
    Titulo: string;
}

type BlogContentProps = {
    showTitle: boolean;
};

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

export default function BlogContent(props: BlogContentProps){
    const {showTitle} = props;
    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {
        api.get('/posts').then(({data}) => {
            setPosts(data)
        })
    }, []);

    return(
        <BlogContainer>
           {showTitle && 
           <TitleBlog>
                 <p>Blog</p>
               <LineSmall />
            </TitleBlog>
        }   
            {
                posts?.map(({Titulo, coverImage, _id})=> (
                    <Grid key={_id}>
                        <BlogPost Titulo={Titulo} coverImage={coverImage} _id={_id} />
                    </Grid>
                ))
            }
        </BlogContainer>
    )
}