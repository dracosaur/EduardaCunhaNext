import Image from 'next/image';
import profileImage from '../../../public/Foto Duda Inteira.png'
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { LineMedium } from '../../../components/Line';

const Container = styled.header`
padding: 60px 10px 30px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
`

const BoxImage = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    margin: 24px 0;
    ${breakpoint('tablet')`
        width: 400px;
        height: 400px;
    `}

    ${breakpoint('desktop')`
        width: 500px;
        height: 500px;
    `}
`

const Title = styled.h1`
    margin: 16px 0;
    
    font-size: 16px;
    font-weight: 800;
    font-family: 'Open Sans', sans-serif;
    color: #404040;
    text-transform: uppercase;

    p { 
        font-size: 14px; 
        font-weight: 600;
    }

    ${breakpoint('desktop')`
        margin: 40px 0 0;
        font-size: 28px;

        p { 
            font-size: 20px; 
            font-weight: 600;
        }
    `}
`

const TextBox = styled.text`
    margin: 15px 15%;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    ${breakpoint('tablet')`
        margin: 15px 20%;
    `}

    ${breakpoint('desktop')`
        margin: 50px 30%;
        font-size: 18px;
    `}

    color: #808080;
    display: flex;
    text-align: center;
`


export default function BiographyContent(){
    return (
        <Container>
            <BoxImage>
                <Image src={profileImage} alt="Eduarda Cunha" objectFit='fill'/>
            </ BoxImage>
            <LineMedium />
            <Title>
            Eduarda Cunha
            <p>CRFa 7 10021</p>
            </Title>
            <TextBox>
                Fonoaudióloga formada pela Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA), atua na área de voz, como preparadora vocal de cantores, atores, locutores, jornalistas e demais profissionais da voz. Presta assessoria em gravações, bem como atua na reabilitação vocal. 
            </TextBox>
        </Container>
    );
}