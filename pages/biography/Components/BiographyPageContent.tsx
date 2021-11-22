import { Grid } from '@material-ui/core';
import Image from 'next/image';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { LineSmall } from '../../../components/Line';
import profileImage from '../../../public/Foto Duda Inteira.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .itemBio {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        ${breakpoint('desktop')`
            margin-bottom: 60px;
        `}

        .CRF {
            font-size: 14px; 
            font-weight: 600;

            ${breakpoint('desktop')`
            margin-bottom: 18px;
        `}
        }
    }

    p {
        font-size: 16px;
        font-weight: 800;
        font-family: 'Open Sans', sans-serif;
        color: #404040;
        text-transform: uppercase;

        
        ${breakpoint('desktop')`
            font-size: 20px;
      `}
    }
`

const TitleBio = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px 0;
    ${breakpoint('desktop')`
        margin: 80px 0;
    `}

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
    width: 250px;
    height: 250px;
    margin-bottom: 60px; 

    ${breakpoint('tablet')`
      width: 400px;
      height: 300px;
  `}
    ${breakpoint('desktop')`
      width: 450px;
      height: 450px;
      margin-bottom: 80px; 
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
    flex-direction: column;

    ${breakpoint('desktop')`
        font-size: 16px;
        text-align: justify;
    `}

    p {
        margin: 5px 0;
    }
`

export default function BiographyPageContent(){
    return(
        <Container>
            <TitleBio>
                <p>Biografia</p>
            <LineSmall />
            </TitleBio>
            <Grid container>
                <Grid className='itemBio' item xs={12} sm={6}>
                    <ImageBox>
                        <Image src={profileImage} alt="Eduarda Cunha" objectFit='fill'/>
                    </ImageBox>
                </Grid>
                <Grid className='itemBio' item xs={12} sm={6}>
                    <p>Eduarda Cunha</p>
                    <p className='CRF'>CRFa 7 10021</p>
                    <TextBox>
                    Formada pela Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA), é preparadora vocal de cantores populares. Prepara participantes dos programas The Voice Brasil, além de atrizes e atores para espetáculos teatrais cinema e filmes publicitários,
                    tambem fazendo o acompanhamento de cantores em gravações e shows minisséries.
                    <p />
                    Eduarda desenvolveu uma técnica personalizada de cuidado vocal utilizando recursos e estratégias atuais.   
                    <p />
                    Sua formação inclui
                    Intercâmbio durante a graduação pelo programa Ciência Sem Fronteiras em Sydney Austrália (2013-1014)
                    Graduação em Fonoaudiologia - UFCSPA
                    Pós Graduada em Voz Artística pelo Centro de Estudos da Voz (CEV/SP)
                    Mestre em Patologia pela UFCSPA
                    Atualmente Doutoranda em Ciências da Saúde pela UFCSPA e Pós Graduanda em Voz Cantada pela FNH.

                    Certificada pelos métodos:
                    LSTV (Lee Silverman Voice Treatment)
                    </TextBox>
                </Grid>
            </Grid>


        </Container>
    )
}