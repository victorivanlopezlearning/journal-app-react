import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { useForm } from '../../hooks';

const formData = {
  email: '',
  password: '',
}

const formValidations = {
  email: [(value) => value.length >= 1, 'El correo es obligatorio'],
  password: [(value) => value.length >= 1, 'La contraseña es obligatoria'],
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    email, password, onInputChange, formState,
    isFormValid, passwordValid, emailValid
  } = useForm(formData, formValidations);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSignIn = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startLoginWithEmailPassword(formState));
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }

  return (
    <>
      <Typography
        variant="h5"
        sx={{ mb: 2 }}
      >
        Inicia sesión
      </Typography>

      <form
        className='animate__animated animate__fadeIn animate__faster'
        onSubmit={onSignIn}
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo Electrónico"
              type="email"
              name='email'
              fullWidth
              error={!!emailValid && formSubmitted}
              helperText={formSubmitted ? emailValid : ''}
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              name='password'
              fullWidth
              error={!!passwordValid && formSubmitted}
              helperText={formSubmitted ? passwordValid : ''}
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid
            container
            spacing={2}
            alignItems='center'
            sx={{ mb: 2, mt: 2 }}
          >
            <Grid
              item
              xs={12}
              display={(!!errorMessage) ? '' : 'none'}
            >
              <Alert severity='error'>
                {errorMessage}
              </Alert>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                type='submit'
                variant="contained"
                fullWidth
                disabled={isAuthenticating}
              >
                <Typography>Iniciar sesión</Typography>
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                type='button'
                variant="contained"
                fullWidth
                disabled={isAuthenticating}
                onClick={onGoogleSignIn}
              >
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