import { Link } from '@material-ui/core';
import { Copyright, Facebook, Instagram, MailOutline, Telegram, WhatsApp } from '@material-ui/icons';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

const QueryContainer = styled.footer`
    width: 100%;
    display:  flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #F6C064;
    padding: 30px;
    ${breakpoint('desktop')`
        padding: 40px;
    `}

    h1 {
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        color: #FFF;

        ${breakpoint('desktop')`
            font-size: 16px;
        `}
    }
`

const QueryContent = styled.div`
    margin: 20px 0;
    padding: 16px 16px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;

    ${breakpoint('desktop')`
        padding: 20px 20px;
    `}
    .icon {
        color: #FFF;
        width: 30px;

        ${breakpoint('desktop')`
            width: 40px;
            font-size: 40px;
        `}
    `

const CopyrightText = styled.text`
    font-size: 6px;
    font-weight: 800;
    color: #404040;
    ${breakpoint('desktop')`
        font-size: 8px;
    `}
    .copyrightIcon {
        font-size: 6px;
        ${breakpoint('desktop')`
            font-size: 8px;
        `}
    }
`


export default function Footer(){
    return(
        <QueryContainer>
            <h1>Entre em contato:</h1>
            <QueryContent>
                <Link href="#">
                    <WhatsApp fontSize='large' className='icon' />
                 </Link>
                <Link href="#">
                    <Facebook fontSize='large' className='icon' />
                </Link>
                <Link href="#">
                    <Instagram  fontSize='large' className='icon' />
                </Link>
                <Link href="#">
                    <MailOutline fontSize='large' className='icon' />
                </Link>
                <Link href="#">
                    <Telegram fontSize='large' className='icon' />
                </Link>
            </QueryContent>
            <CopyrightText>
               <Copyright className='copyrightIcon'/>
                    Todos direitos reservados - Eduarda Cunha Assessoria em Voz e Comunicação - 2020
            </CopyrightText>
        </QueryContainer>
    )
}
