import styled from 'styled-components';
import { LineMedium, LineSmall } from '../../../components/Line';
import { breakpoint } from 'styled-components-breakpoint';
import { technology } from './const.json'
import { useRouter } from 'next/router';

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

const ImageBox = styled.div<any>`
    aling-items: center;
    width: 290px;
    height: 211px;
  
    background-image: url(${({bg}) => bg});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 8px;
    margin-bottom: 60px; 

    ${breakpoint('desktop')`
        width: 800px;
        height: 400px;
    `}
`

const Content = styled.div`
    margin: 0px 0 60px;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;

    ${breakpoint('desktop')`
        margin: 30px 0 100px;
    `}
`

export default function TechnologyPageContent() {
    return (
        <Container>
            <TitleBlog>
                <p>Recursos</p>
               <LineSmall />
            </TitleBlog>
                {
                    technology?.map(({title, image, id}, index) => (
                        <Content key={index} >
                            <ImageBox bg={image}/>
                            <LineMedium />
                            <p>{title}</p>
                        </Content>
                    ))
                }
        </Container>
    )
}