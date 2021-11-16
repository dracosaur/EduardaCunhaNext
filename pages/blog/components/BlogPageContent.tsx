import { useEffect, useState } from 'react';
import api from '../../../services/api';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { LineSmall } from '../../../components/Line';
import  BlogContent, {PostProps}  from './BlogContent';
import Grid from '@material-ui/core/Grid';
import BlogPost from '../posts/BlogPost';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 16px;
        font-weight: 800;
        font-family: 'Open Sans', sans-serif;
        color: #404040;
        text-transform: uppercase;
    }
`

const TitleBlog = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px 0;

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

const ImageBox = styled.div`
    display: flex;
    width: 325px;
    height: 207px;
    margin-bottom: 60px; 
    ${breakpoint('tablet')`
      width: 400px;
      height: 300px;
  `}
    ${breakpoint('desktop')`
      width: 500px;
      height: 400px;
    `}
`

export default function BlogPageContent(post: PostProps) {

    return (
        <Container>
            <TitleBlog>
                <p>Blog</p>
                <LineSmall />
            </TitleBlog>
            <Grid>
                <BlogContent showTitle={false} />
            </Grid>
        </Container>
    )
}