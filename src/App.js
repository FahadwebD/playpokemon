import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const {loginWithPopup , loginWithRedirect, logout , user , isAuthenticated} = useAuth0()
  return (
    <div className="App">
      <ul>
        <li><button onClick={loginWithPopup }>log i popup</button></li>
        <li><button onClick={loginWithRedirect}> log i redirect</button></li>
        <li><button onClick={logout }>logout</button></li>


      </ul>
      <h2>{isAuthenticated? 'loge in': 'not log in'}</h2>
      {isAuthenticated && 
      <h1>{JSON.stringify(user , null ,2)}</h1>}
    </div>
  );
}

export default App;
