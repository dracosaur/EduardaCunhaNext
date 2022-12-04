import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { breakpoint } from 'styled-components-breakpoint';
import { LineGrey } from '../../../components/Line';
import { PostProps } from '../components/BlogContent';
import Link from 'next/link';

const Container = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    padding: 24px 16px; 
`

const ImageBoxBlog = styled.div`
    display: flex;

    img {
        width: 100%;
    }
`

const Box = styled.div`
    margin: 24px 0;

    p {
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        margin: 0 0 16px;
   
        ${breakpoint('desktop')`
            font-size: 16px;
        `}
    }   
`

const TextBox = styled.text`
    margin: 30px 15% 60px;
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 400;
    color: #808080;
    display: flex;
    text-align: center;
`

export default function BlogPost({_id, coverImage, Titulo}: PostProps){

    return (
        <Link href={`/blog/posts/${_id}`}>
        <Container>
            <ImageBoxBlog>
                <img src={coverImage} alt={Titulo} />
            </ImageBoxBlog>
            <Box>
            <Typography variant="body1">
                 <p>{Titulo}</p>
            </Typography>
            <LineGrey />
            </Box>
        </Container>
        </Link>
    )
}