import { Box, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar } from '../components';

const drawerWidth = 240;

export const JournalLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>

      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}