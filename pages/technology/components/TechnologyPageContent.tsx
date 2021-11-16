import styled from 'styled-components';
import { LineMedium, LineSmall } from '../../../components/Line';

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
  width: 400px;
  background: #1d1e1c;
  padding: 8px;
  margin-bottom: 60px; 

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

export default function TechnologyPageContent() {
    return (
        <Container>
            <TitleBlog>
                <p>Recursos</p>
               <LineSmall />
            </TitleBlog>
            <ImageBox>
                
            </ImageBox>
            <LineMedium />
            <p>Eletroestimulação</p>
            <TextBox>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, dignissimos fuga, tempore perspiciatis reiciendis adipisci expedita distinctio repellat amet nostrum tenetur nihil atque enim alias facere iste? Quae, minima repudiandae.
            </TextBox>
        </Container>
    )
}