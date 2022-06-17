import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import React from 'react';
import { LineSmall } from '../../../components/Line';
import api from '../../../services/api';

export interface PostProps {
    _id: string;
    coverImage: string;
    Titulo: string;
    Conteudo: String;
}

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

const TitlePost = styled.h1`
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
    width: 300px;
    height: 300px;
    margin-bottom: 60px; 
    ${breakpoint('tablet')`
      width: 400px;
      height: 300px;
  `}
    ${breakpoint('desktop')`
      width: 500px;
      height: 400px;
    `}

    img {
        width: 100%;
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

const PostPage = (props: PostProps) => {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState<PostProps[]>();

    useEffect(() => {
        if (id) {
            try {
                api.get(`/posts?id=${id}`).then(({data})=> {
                    setPost(data)
                })
            } catch (err) {
                console.log(err);
            }
        }
    }, [id]);

    return (
        <>
            {
                post && post.map(({coverImage, Titulo, Conteudo}) =>  (
                    <Container>
                        <TitlePost>
                            <p>Blog</p>
                            <LineSmall />
                        </TitlePost>
                        <ImageBox>
                            <img src={coverImage} alt={Titulo}></img>
                        </ImageBox>
                        <p>{Titulo}</p>
                        <TextBox>
                                {Conteudo}
                        </TextBox>
                    </Container>
                )
                )
            }
        </>
    );
}

export default PostPage;

