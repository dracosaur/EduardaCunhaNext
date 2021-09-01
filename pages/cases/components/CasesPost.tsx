import { Grid } from "@material-ui/core";
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { LineSmall } from "../../components/Line";

const Container = styled.div`
    display: flex;

    .container {
        justify-content: center;
        flex-wrap: nowrap
    }

    .item {
        ${breakpoint('tablet')`
        padding: 0 16px;
      `}
    
      ${breakpoint('desktop')`
        padding: 0 24px;
      `}
    }

    p {
        padding-top: 20px;
        display: flex;
        justify-content: center;
        font-style: normal;
        font-size: 16px;
        font-weight: 700;
        color: #F7AF35;
        text-transform: uppercase;
    }
    
`


const CaseImage = styled.div`
    display: flex;
    flex-direction: column;
    background: #404040;
    height: 517px;
    width: 187.5px;
    align-items: center;
`

export function CasesPost(){
    return(
        <Container>
            <Grid container className='container'>
                <Grid item className='item'>
                    <CaseImage> 
                        <p>Marilia Mendonça</p>
                        <LineSmall />
                    </CaseImage>
                </Grid>
                <Grid item className='item'>
                    <CaseImage> 
                        <p>Pedro Sartori</p>
                        <LineSmall />
                    </CaseImage>
                </Grid>
            </Grid>
        </Container>    
    )
}