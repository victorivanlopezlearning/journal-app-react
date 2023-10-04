import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, TextField, Typography, Link, Alert } from '@mui/material';
import { useForm } from '../../hooks';
import { startEmailPasswordSignIn } from '../../store/auth';

const formData = {
  email: '',
  password: '',
  name: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [(value) => value.length >= 6, 'El password debe de tener más de 6 carácteres'],
  name: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth);
  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const {
    name, email, password, onInputChange, formState,
    isFormValid, nameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid && !isAuthenticating) return;

    dispatch(startEmailPasswordSignIn(formState));
  }

  return (
    <>
      <Typography
        variant="h5"
        sx={{ mb: 2 }}
      >
        Registro
      </Typography>

      <form
        onSubmit={onSubmit}
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              name='name'
              fullWidth
              error={!!nameValid && formSubmitted}
              helperText={formSubmitted ? nameValid : ''}
              value={name}
              onChange={onInputChange}
            />
          </Grid>
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
              name="password"
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
            sx={{ mb: 2, mt: 2 }}
          >
            <Grid
              item
              xs={12}
              display={!!errorMessage ? '' : 'none'}
            >
              <Alert severity='error'>
                {errorMessage}
              </Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                type='submit'
                variant="contained"
                fullWidth
                disabled={isAuthenticating}
              >
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