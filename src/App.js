import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import Home from './components/Home/Home/Home';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import FavouritePokemons from './components/FavouritePokemons/FavouritePokemons';
function App() {

  const {loginWithPopup , loginWithRedirect, logout , user , isAuthenticated} = useAuth0()
  return (
    <div className="App">
      <BrowserRouter>
     <Switch>
       <Route exact path='/'>
       <Home/>
       </Route>
       <Route exact path='/home'>
       <Home/>
       </Route>
       <Route exact path='/fav'>
         <FavouritePokemons></FavouritePokemons>
       </Route>
     </Switch>
   
     </BrowserRouter>
   
      
    </div>
  );
}

export default App;
