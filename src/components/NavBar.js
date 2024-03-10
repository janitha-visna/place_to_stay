import { Lock, } from '@mui/icons-material';
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import photoURL from '../../src/res_photos/profile.jpeg';
import { useValue } from '../Context/ContextProvider';

import { Menu } from '@mui/icons-material';
import UserIcons from './user/UserIcons';


const user = { name: 'test', photoURL };

export const NavBar = () => {
  const { state: {currentUser },dispatch }= useValue();

  return (
    <AppBar>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <Box sx={{ mr: 1 }}>
            <IconButton size='large' color='inherit'>
              {/* Menu icon component */}
            </IconButton>
          </Box>
          <Typography
            variant='h6'
            component='h1'
            noWrap
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            you are welcome
          </Typography>
          <Typography
            variant='h6'
            component='h1'
            noWrap
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            YRW
          </Typography>
          {!currentUser ? (
            <Button color='inherit' startIcon={<Lock />} onClick={()=>dispatch({type:'UPDATE_USER',payload:user})} > 
              LOGIN
            </Button>
          ) : (
            <UserIcons/>
              
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
