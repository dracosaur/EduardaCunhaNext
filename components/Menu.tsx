import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { grey } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import Link from 'next/link';

const Ancor = styled.a`
  color: #313131;
  text-decoration: none;
`;

export default function MenuComponent() {
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
        <MenuItem onClick={handleClose}><Link href='/'><Ancor>Home</Ancor></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/biography'><Ancor>Biografia</Ancor></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/blog'><Ancor>Blog</Ancor></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/technology'><Ancor>Recursos</Ancor></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/cases'><Ancor>Cases</Ancor></Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/query'><Ancor>Consulta</Ancor></Link></MenuItem>
      </Menu>
    </div>
  )
}