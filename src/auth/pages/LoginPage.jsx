import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

export const LoginPage = () => {

  return (
    <>
      <Typography
        variant="h5"
        sx={{ mb: 2 }}
      >
        Inicia sesión
      </Typography>

      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo Electrónico"
              type="email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              fullWidth
            />
          </Grid>

          <Grid
            container
            spacing={2}
            alignItems='center'
            sx={{ mb: 2, mt: 2 }}
          >
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Typography>Iniciar sesión</Typography>
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
            <Typography sx={{ mr: 1 }}>¿No tienes una cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  )
}