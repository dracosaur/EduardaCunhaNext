import styled from 'styled-components';
import { LineMedium, LineSmall } from '../../../components/Line';
import { breakpoint } from 'styled-components-breakpoint';

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
    aling-items: center;
    height: 200px;
    width: 320px;
    background: #1d1e1c;
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
            <Content>
                <ImageBox></ImageBox>
                <LineMedium />
                <p>Mindvox</p>
            </Content>
            <Content>
                <ImageBox></ImageBox>
                <LineMedium />
                <p>Fotoestimulação</p>
            </Content>
            <Content>
                <ImageBox></ImageBox>
                <LineMedium />
                <p>Ultrassom</p>
            </Content>
            <Content>
                <ImageBox></ImageBox>
                <LineMedium />
                <p>Eletroestimulação</p>
            </Content>
        </Container>
    )
}