import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', }}
    >
      <Grid
        item
        className="box-shadow"
        
        sx={{ backgroundColor: 'white', padding: 4, borderRadius: 3 }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 2 }}
        >
          Login
        </Typography>

        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo Electrónico"
                type="email"
                placeholder="correo@gmail.com"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
              />
            </Grid>

            <Grid
              container
              spacing={2}
              sx={{ mb: 2, mt: 2 }}
            >
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  <Typography>Login</Typography>
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid
              container
              direction='row'
              justifyContent='end'
            >
              <Link component={RouterLink} color='inherit' to='/auth/register'>
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}