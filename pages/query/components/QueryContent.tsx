import { LineSmall } from '../../../components/Line';
import styled from 'styled-components';
import Button from '../../../components/Button';



const QueryContainer = styled.div`
    display:  flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 30px 10px;
`


const TitleQuery = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;

    p {
        font-style: normal;
        font-size: 16px;
        font-weight: 800;
        color: #F7AF35;
        text-transform: uppercase;
        margin-bottom: 16px;
    }
`

const TextBox = styled.text`
    margin: 30px 15% 60px;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;

    color: #B7B7B7;
    display: flex;
    text-align: center;
`

export default function QueryContent() {
    return(
        <QueryContainer>
            <TitleQuery>
                <p>Consulta</p>
                <LineSmall />
            </TitleQuery>
            <TextBox>
                Entenda como funciona a consulta, e fique a vontade para tirar suas duvidas.
            </TextBox>
            <Button>Marcar</Button>
        </QueryContainer>
    )
}