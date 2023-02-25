import Navbar from './components/Navbar';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Chat from './components/Chat';

function App() {
  const [User] = useAuthState(auth);
  console.log(User);

  return (
    <div className="App">
      <section className="Main_container">
        {/* NAVBAR */}
        <Navbar />

        {/* CHAT COMPONENT */}
        {User ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
