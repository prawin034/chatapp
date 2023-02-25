import { auth } from '../firebase';
const SignOut = () => {
  const signOut = () => {
    signOut(auth);
  };
  return (
    <button onClick={() => auth.signOut()} className="logout">
      logout
    </button>
  );
};

export default SignOut;
