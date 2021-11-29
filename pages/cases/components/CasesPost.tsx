import { Grid } from "@material-ui/core";
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { LineSmall } from "../../../components/Line";
import Image from 'next/image';

const Container = styled.div`
    display: flex;
    margin: 0 0 50px;

    .container {
        justify-content: center;
        flex-wrap: nowrap;
    }

    .item {
        ${breakpoint('tablet')`
        padding: 0 16px;
      `}
    
      ${breakpoint('desktop')`
        padding: 0 24px;
      `}
    }

    ${breakpoint('desktop')`
        margin: 50px 0;
    `}

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


const CaseImage = styled.a`
    display: flex;
    flex-direction: column;
    background: #404040;
    height: 517px;
    width: 187.5px;
    align-items: center;
    text-decoration: none;
    
    ${breakpoint('tablet')`
        height: 517px;
        width: 187.5px;
    `}
  
    ${breakpoint('desktop')`
        height: 600px;
        width: 450px;
    `}
`

export default function CasesPost(){
    return(
        <Container>
            <Grid container className='container'>
                <Grid item className='item'>
                    <CaseImage href='/cases'> 
                        <p>Stephanie Lii</p>
                        <LineSmall />
                    </CaseImage>
                </Grid>
                <Grid item className='item'>
                    <CaseImage href='/cases'> 
                        <p>Gustavo Bing</p>
                        <LineSmall />
                    </CaseImage>
                </Grid>
            </Grid>
        </Container>    
    )
}