import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { LineSmall } from '../../components/Line';

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

        
        ${breakpoint('desktop')`
            font-size: 20px;
      `}
    }
`

const TitleQuery = styled.h1`
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
        margin: 0 0 16px;

        ${breakpoint('desktop')`
            font-size: 20px;
            margin: 15px 0 16px;
        `}
    }
    
`
const TextBox = styled.text`
    margin: 15px 15% 60px;
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 400;
    color: #808080;
    display: flex;
    text-align: center;
    flex-direction: column;

    ${breakpoint('desktop')`
        font-size: 16px;
        margin: 30px 15% 80px;
    `}

`

export default function Query() {
    return(
        <Container>
            <TitleQuery>
                <p>Consulta</p>
               <LineSmall />
            </TitleQuery>
            <p>CONSULTORIA, AVALIAÇÃO E TREINAMENTO</p>
            <TextBox>
                Avaliação vocal completa é essencial para um planejamento terapeutico adequado e para verificar a necessidade e demanda 
                do cliente. Eduarda realiza avaliação acústica com os programas mais usados em Pesquisa e Avaliação Auditivo 
                perceptiva vocal. Avaliação também corporal, e da motricidade orofacial.
            </TextBox>
            <p>REABILITAÇÃO VOCAL</p>
            <TextBox>
                Paciente com alteração vocal e dificuldades em demanda de fala e canto.
            </TextBox>
            <p>ATENDIMENTO ONLINE E PRESENCIAL</p>
            <TextBox>
                Acompanhamento de cantores, ensaios, shows, turnês, gravações.
            </TextBox>
            <p>ATENDIMENTO INDIVIDUAL OU EM GRUPO</p>
            <TextBox>
                Atendimento individual, em grupo, in company.
            </TextBox>
            <p>PALESTRAS E WORKSHOPS</p>
            <TextBox>
                Realização de palestras e workshops online e presencial sobre o cuidado vocal.
            </TextBox>
            <TitleQuery>
                <p>Contato</p>
               <LineSmall />
            </TitleQuery>
        </Container>    
    )
}