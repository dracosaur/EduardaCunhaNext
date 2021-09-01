import Image from 'next/image'
import headerImage from '../../public/Logo Branco.png'
import styled from 'styled-components';
import { MenuComponent } from './Menu';

const BackgroundHeader = styled.header`
    background: #f7af35;
    padding: 10px 0;
    height: 170px; 
    text-align: center;
`

const MenuBar = styled.div`
    display: flex;
    justify-content: flex-end;
`

export function Header() {
    return(
        <BackgroundHeader>
            <Image src={headerImage} alt="Fono-Eduarda" height={111} width={157}>
            </Image>
            <MenuBar>
               <MenuComponent />
            </MenuBar>
        </BackgroundHeader>
    )
}