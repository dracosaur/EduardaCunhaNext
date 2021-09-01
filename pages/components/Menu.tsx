import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { grey } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';


const Ancor = styled.a`
  color: #313131;
  text-decoration: none;
`;


export function MenuComponent() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon fontSize='large' style={{ color: grey[100] }}/>
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}><Ancor href='/'>Home</Ancor></MenuItem>
        <MenuItem onClick={handleClose}><Ancor href='/biography'>Biografia</Ancor></MenuItem>
        <MenuItem onClick={handleClose}><Ancor href='/blog'>Blog</Ancor></MenuItem>
        <MenuItem onClick={handleClose}><Ancor href='/technology'>Tecnologias</Ancor></MenuItem>
        <MenuItem onClick={handleClose}><Ancor href='/cases'>Cases</Ancor></MenuItem>
        <MenuItem onClick={handleClose}><Ancor href='/query'>Consulta</Ancor></MenuItem>
      </Menu>
    </div>
  )
}