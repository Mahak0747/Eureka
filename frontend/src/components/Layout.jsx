import React, { useState } from 'react';
import Appbar from './Appbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';


const Layout = () => {
  const drawerWidth = 220;
  const [drawerOpen, setDrawerOpen] = useState(true); // Open by default

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Appbar toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} drawerWidth={drawerWidth} />
      <Sidebar open={drawerOpen} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          mt: '50px',
          transition: 'margin 0.3s ease',
          // marginLeft: drawerOpen ? `${drawerWidth}px` : '60px',
          backgroundColor: '#f7f8fb',
          minHeight: 'calc(100vh - 50px)',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;