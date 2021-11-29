import { Instagram } from '@material-ui/icons';
import Image from 'next/image';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { LineMedium, LineSmall } from '../../../components/Line';
import adell from '../../../public/Adele.jpg';


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

        ${breakpoint('desktop')`
            font-size: 20px;
        `}
    }
`

const ImageBox = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    margin-bottom: 60px; 
    ${breakpoint('tablet')`
      width: 400px;
      height: 300px;
  `}
    ${breakpoint('desktop')`
      width: 900px;
      height: 400px;
    `}
`

const TextBox = styled.text`
    margin: 30px 15% 60px;
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 400;
    color: #808080;
    display: flex;
    flex-direction: column;
    text-align: center;

    ${breakpoint('desktop')`
        font-size: 18px;
    `}
    
    .info {

        font-size: 14px;
        font-weight: 400;
        color: #808080;
        text-transform: none;

        display: flex;
        align-items: center;
        justify-content: center;

        ${breakpoint('desktop')`
          font-size: 18px;
        `}

        .icon {
            font-size: 35px;
            padding: 8px;

            ${breakpoint('desktop')`
                font-size: 40px;
          `}
        }

        a {
            cursor: pointer;
            text-decoration: none;
        }
    }
`

const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function CasesPageContent() {
    return (
        <Container>
            <TitleBlog>
                <p>Cases</p>
               <LineSmall />
            </TitleBlog>
            <PageContent>
                <ImageBox>
                    <Image loading='lazy' src={adell} alt="Blog Imagem" objectFit='fill' />
                </ImageBox>
                <LineMedium />
                <p>Stephanie Lii</p>
                <TextBox>
                    Cantora e interprete do Adele Tribute Hello. (Foto do Edu Deferrari) 
                    <p className='info'> 
                        <Instagram className='icon'/>
                        <a href='https://www.instagram.com/adeletribute.hello/' title='Adele Tribute' target='_blank' rel="noreferrer"> @adeletribute.hello</a>
                    </p>
                </TextBox>
            </PageContent>
        </Container>
    )
}