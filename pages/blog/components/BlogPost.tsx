import styled from 'styled-components';
import { GetStaticProps } from 'next';
import Link from '@material-ui/core/Link';
import Image from 'next/image';
import blogImage from '../../../public/Blog Referencia 1.png';
import { Typography } from '@material-ui/core';
import { breakpoint } from 'styled-components-breakpoint';
import { LineGrey } from '../../components/Line';

interface PostProps {
    posts: {
        _id: string;
        image: string;
        Titulo: string;
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    padding: 24px 16px; 
`

const ImageBoxBlog = styled.div`
    display: flex;
    width: 252px;
    height: 180px;
    ${breakpoint('tablet')`
      width: 400px;
      height: 300px;
  `}

    ${breakpoint('desktop')`
      width: 500px;
      height: 400px;
    `}
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

export default function BlogPost(posts: any){
    return (
        <Container>
            <ImageBoxBlog>
                <Image loading='lazy' src={blogImage} alt="Blog Imagem" objectFit='fill' />
            </ImageBoxBlog>
            <Box>
                <Typography variant="body1">
                    <p>Cuide da sua voz!</p>
                </Typography>
                <LineGrey />
            </Box>
        </Container>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    

    console.log('opa');
    const res = await fetch('/api/getAllPosts');

    const posts = res.json();

    return posts;
}