import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './SignIn';
import SignOut from './SignOut';
const Navbar = () => {
  const [User] = useAuthState(auth);
  console.log(User);
  return (
    <div className="navbar">
      <h1 className="navbar_h1">chat application</h1>
      {User ? <SignOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
