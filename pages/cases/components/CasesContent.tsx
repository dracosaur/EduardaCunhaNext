import styled from 'styled-components';
import { Button } from '../../../components/Button';
import { LineSmall } from '../../../components/Line';
import { CasesPost } from './CasesPost';

const CasesContainer = styled.div`
    display: flex;
    text-aling: center;
    flex-direction: column;
    padding: 30px 0;
    align-items: center;
`

const TitleCases = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;

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

export function CasesContent(){
    return(
        <CasesContainer>
            <TitleCases>
                <p>Cases</p>
                <LineSmall />
            </TitleCases>
            <CasesPost />
            <Button>Conheça mais</Button>
        </CasesContainer>
    )
}