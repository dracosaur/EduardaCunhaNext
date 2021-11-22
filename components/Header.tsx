import Image from 'next/image'
import headerImage from '../public/Logo_Branco.png';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import  MenuComponent  from './Menu';

const BackgroundHeader = styled.header`
    background: #f7af35;
    padding: 10px 0;
    height: 170px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    ${breakpoint('desktop')`
        height: 250px;
  `}
`

const MenuBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const ImageBox = styled.a`
    width: 157px;
    height: 111px;

    ${breakpoint('desktop')`
      width: 250px;
      height: 220px;
    `}
`

export default function Header() {
    return(
        <BackgroundHeader>
            <ImageBox href='/'>
                <Image src={headerImage} alt="Fono-Eduarda"  objectFit='fill'/>
            </ImageBox>
            <MenuBar>
               <MenuComponent />
            </MenuBar>
        </BackgroundHeader>
    )
}