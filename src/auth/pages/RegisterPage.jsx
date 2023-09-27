import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, TextField, Typography, Link } from "@mui/material"
import { Google } from "@mui/icons-material"

export const RegisterPage = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ mb: 2 }}
      >
        Registro
      </Typography>

      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              fullWidth
            />
          </Grid>
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
            sx={{ mb: 2, mt: 2 }}
          >
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                <Typography>Crear cuenta</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction='row'
            justifyContent='end'
          >
            <Typography sx={{ mr: 1 }}>¿Ta tienes una cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Inicia sesión
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  )
}