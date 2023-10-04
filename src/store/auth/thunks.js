import { checkingCredentials, login, logout } from './';
import { signInWithEmailPassword, signInWithGoogle } from '../../firebase/providers';

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