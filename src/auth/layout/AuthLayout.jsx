import { Grid, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        padding: 2
      }}
    >
      <Grid
        item
        className="box-shadow"
        sx={{
          width: { sm: 500 },
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 3
        }}
      >
        <Outlet />
      </Grid>
    </Grid>
  )
}