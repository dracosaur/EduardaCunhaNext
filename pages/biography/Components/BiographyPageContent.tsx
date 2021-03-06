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
                    Formada pela Universidade Federal de Ci??ncias da Sa??de de Porto Alegre (UFCSPA), ?? preparadora vocal de cantores populares. Prepara participantes dos programas The Voice Brasil, al??m de atrizes e atores para espet??culos teatrais cinema e filmes publicit??rios,
                    tambem fazendo o acompanhamento de cantores em grava????es e shows miniss??ries.
                    <p />
                    Eduarda desenvolveu uma t??cnica personalizada de cuidado vocal utilizando recursos e estrat??gias atuais.   
                    <p />
                    Sua forma????o inclui
                    Interc??mbio durante a gradua????o pelo programa Ci??ncia Sem Fronteiras em Sydney Austr??lia (2013-1014)
                    Gradua????o em Fonoaudiologia - UFCSPA
                    P??s Graduada em Voz Art??stica pelo Centro de Estudos da Voz (CEV/SP)
                    Mestre em Patologia pela UFCSPA
                    Atualmente Doutoranda em Ci??ncias da Sa??de pela UFCSPA e P??s Graduanda em Voz Cantada pela FNH.

                    Certificada pelos m??todos:
                    LSTV (Lee Silverman Voice Treatment)
                    </TextBox>
                </Grid>
            </Grid>


        </Container>
    )
}