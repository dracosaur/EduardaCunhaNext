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

export function BlogContent(props: BlogContentProps){
    const {showTitle} = props;
    const [posts, setPosts] = useState<PostProps[]>([]);

    useEffect(() => {
        api.get('/getAllPosts').then(response => {
            setPosts(response.data.posts)})
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
                posts?.map(post => (
                    <Grid key={post._id}>
                        <BlogPost Titulo={post.Titulo} coverImage={post.coverImage} _id={post._id} />
                    </Grid>
                ))
            }
        </BlogContainer>
    )
}