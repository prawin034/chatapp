import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import GoogleButton from 'react-google-button';
import { auth } from '../firebase';
const SignIn = () => {
  const GoogleAuthentication = () => {
    const googleSignin = new GoogleAuthProvider();
    signInWithRedirect(auth, googleSignin);
  };
  return (
    <div className="SignIN">
      <GoogleButton onClick={GoogleAuthentication} />
    </div>
  );
};

export default SignIn;
