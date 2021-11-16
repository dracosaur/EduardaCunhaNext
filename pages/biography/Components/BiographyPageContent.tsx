import Image from 'next/image';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { LineMedium, LineSmall } from '../../../components/Line';
import profileImage from '../../../public/Foto Duda Inteira.png'

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

const TitleBio = styled.h1`
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

export default function BiographyPageContent(){
    return(
        <Container>
            <TitleBio>
                <p>Biografia</p>
            <LineSmall />
            </TitleBio>
            <ImageBox>
                <Image src={profileImage} alt="Eduarda Cunha" objectFit='fill'/>
            </ImageBox>
            <LineMedium />
            <p>Eduarda Cunha</p>
            <TextBox>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, dignissimos fuga, tempore perspiciatis reiciendis adipisci expedita distinctio repellat amet nostrum tenetur nihil atque enim alias facere iste? Quae, minima repudiandae.
            </TextBox>
        </Container>
    )
}