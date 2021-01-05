import './App.css';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import PokemonList from './containers/PokemonList';
import Pokemon from './containers/Pokemon';


function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <NavLink to={"/"} >
            <img src={'/images/pokemon-infor.png'} alt="logo" />
          </NavLink>
        </div>

        <nav>
          <NavLink to={"/pokemon/test"}>Search</NavLink>
        </nav>
        
      </header>
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
