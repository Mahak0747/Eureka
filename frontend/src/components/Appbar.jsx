import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Appbar = ({ toggleDrawer, drawerOpen, drawerWidth }) => {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        width: '100%',
        height: '50px',
        background: '#fff',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Toolbar
        sx={{
          minHeight: '50px !important',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
        }}
      >
        {/* Left: Hamburger + Logo + search */}
        <Box sx={{ display: 'flex', alignItems: 'center', height: 50 }}>
          <IconButton
            onClick={toggleDrawer}
            sx={{ mr: 1, color: '#008DA5' }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <h1 class="display-6">Eureka</h1>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
