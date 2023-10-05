import { checkingCredentials, login, logout } from './';
import { loginWithEmailPassword, logoutFirebase, signInWithEmailPassword, signInWithGoogle } from '../../firebase/providers';

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  }
}

export const startGoogleSignIn = (email, password) => {
  return async (dispatch) => {

    dispatch(checkingCredentials());
    const result = await signInWithGoogle();

    if (!result.isLogin) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  }
}

export const startEmailPasswordSignIn = ({ email, password, name }) => {
  return async (dispatch) => {

    dispatch(checkingCredentials());
    const result = await signInWithEmailPassword({ email, password, name });

    if (!result.isLogin) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {

    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({ email, password });

    if (!result.isLogin) return dispatch(logout(result.errorMessage));
    
    dispatch(login(result));
  }
}

export const startLogout = () => {
  return async (dispatch) => {

    await logoutFirebase();
    dispatch(logout());
  }
}