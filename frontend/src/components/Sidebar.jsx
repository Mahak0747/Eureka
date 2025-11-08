import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Toolbar
} from '@mui/material';
import {
  ConstructionOutlined,
  SpaceDashboardOutlined,
  LibraryBooksOutlined,
  TaskOutlined,
  GradingOutlined,
  AdminPanelSettingsOutlined,
  SupportAgentOutlined,
  PersonAddOutlined,
  ExpandLess,
  ExpandMore,
  FactCheckOutlined,
  BusinessOutlined,
  CorporateFareOutlined,
  AccountBalance,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 270;
const closedDrawerWidth = 60;

const menuItems = [
  { text: 'Live Demo', icon: <GradingOutlined />, path: '/' },
  { text: 'Confusion Matrix', icon: <SpaceDashboardOutlined />, path: '/ConfusionMatrix' },
  { text: 'EDA', icon: <LibraryBooksOutlined />, path: '/EDA' },
  { text: 'Model Comparison', icon: <FactCheckOutlined />, path: '/ModelComparison' },
  { text: 'Model Evaluation', icon: <TaskOutlined />, path: '/ROCCurve' },
  { text: 'Explainability', icon: <TaskOutlined />, path: '/Explainability' }
];

const Sidebar = ({ open }) => {
  const [adminOpen, setAdminOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAdminClick = () => setAdminOpen(prev => !prev);
  const isSelected = (path) => location.pathname === path;

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? drawerWidth : closedDrawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : closedDrawerWidth,
          boxSizing: 'border-box',
          top: '50px',
          height: 'calc(100% - 50px)',
          transition: 'width 0.3s',
          overflowX: 'hidden',
          borderRight: '1px solid #e0e0e0',
          background: '#fff',
          fontSize: '0.775rem',
          color: '#333',
          fontFamily: '"Helvetica", "Arial", sans-serif',
        },
      }}
      PaperProps={{ elevation: 0 }}
    >
      <Toolbar sx={{ minHeight: '0 !important', p: 0 }} />
      <List sx={{ px: 1.5 }}>
        {menuItems.map((item) => {
          if (!item.submenu) {
            return (
              <ListItem
                button
                key={item.text}
                onClick={() => item.path && navigate(item.path)}
                selected={isSelected(item.path)}
                sx={{
                  py: 1.2,
                  px: 2,
                  borderRadius: '10px',
                  my: 0.5,
                  background: isSelected(item.path)
                  ? 'linear-gradient(135deg, #2F5CD7, #3DD9C1)'
                  : 'transparent',
                  color: isSelected(item.path) ? '#fff' : 'inherit',
                  '& .MuiListItemIcon-root': {
                    color: isSelected(item.path) ? '#fff' : 'inherit',
                  },
                  '&:hover': {
                    background: 'linear-gradient(135deg, #2F5CD7, #3DD9C1)',
                    color: '#fff',
                    '& .MuiListItemIcon-root': {
                      color: '#fff',
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {open && <ListItemText primary={item.text} />}
              </ListItem>
            );
          }

          // For Admin Management with submenu
          return (
            <React.Fragment key={item.text}>
              <ListItem
                button
                onClick={handleAdminClick}
                sx={{
                  py: 1.2,
                  px: 2,
                  borderRadius: '10px',
                  my: 0.5,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #2F5CD7, #3DD9C1)',
                    color: '#fff',
                    '& .MuiListItemIcon-root': {
                      color: '#fff',
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                    color: 'inherit',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {open && <ListItemText primary={item.text} />}
                {open && (adminOpen ? <ExpandLess /> : <ExpandMore />)}
              </ListItem>

              <Collapse in={adminOpen && open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ pl: 1.5 }}>
                  {item.submenu.map((sub) => (
                    <ListItem
                      button
                      key={sub.text}
                      onClick={() => sub.path && navigate(sub.path)}
                      selected={isSelected(sub.path)}
                      sx={{
                        py: 1.2,
                        px: 5,
                        borderRadius: '10px',
                        my: 0.5,
                        background: isSelected(sub.path)
                        ? 'linear-gradient(135deg, #2F5CD7, #3DD9C1)'
                        : 'transparent',
                        color: isSelected(sub.path) ? '#fff' : 'inherit',
                        '& .MuiListItemIcon-root': {
                          color: isSelected(sub.path) ? '#fff' : 'inherit',
                        },
                        '&:hover': {
                          background: 'linear-gradient(135deg, #2F5CD7, #3DD9C1)',
                          color: '#fff',
                          '& .MuiListItemIcon-root': {
                            color: '#fff',
                          },
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 2 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        {sub.icon}
                      </ListItemIcon>
                      {open && <ListItemText primary={sub.text} />}
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;