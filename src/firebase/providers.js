import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
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

    return {
      isLogin: false,
      errorMessage: error.message,
    }
  }
}

export const signInWithEmailPassword = async ({ email, password, name }) => {
  try {
    const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL } = result.user;

    await updateProfile(FirebaseAuth.currentUser, {
      displayName: name
    });

    return {
      isLogin: true,
      displayName: name,
      email,
      photoURL,
      uid,
    }

  } catch (error) {

    return {
      isLogin: false,
      errorMessage: error.message,
    }
  }
}