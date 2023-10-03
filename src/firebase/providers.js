import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = async () => {
  try {

    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      isLogin: true,
      displayName,
      email,
      photoURL,
      uid,
    }

  } catch (error) {

    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      isLogin: false,
      errorMessage,
      errorCode,
    }
  }
}