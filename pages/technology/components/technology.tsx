import Loop from './Loop';
import styled from 'styled-components';
import {Button} from '../../../components/Button';
import { breakpoint } from 'styled-components-breakpoint';
import { LineSmall } from '../../../components/Line';

const TechnologyContainer = styled.div`
    display:  flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 30px 10px;

    ${breakpoint('tablet')`
      padding: 16px;
    `}
  
    ${breakpoint('desktop')`
      padding: 24px;
    `}

    .more {
      background: #f6c064;
      color: #313131;
      font-size: 16px;
      text-transform: none;
    }

    .more:hover {
      background: #f4d193;
    }
`

const TitleTechnology = styled.div`
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




export function TechnologyContent(){
    return (
    <TechnologyContainer>
      <TitleTechnology>
        <p>Equipamentos e softwares</p>
        <LineSmall />
      </TitleTechnology>
      <Loop />
      <Button>Conheça mais</Button>
    </TechnologyContainer>
    )
}