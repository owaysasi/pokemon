import logo from './logo.svg';
import Header from './Components/Header/Header';
import './App.css';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Error from './Pages/Error/Error';
import Search from './Components/Search/Search';
import SliderPoke from './Components/SliderPoke/SliderPoke';
import ResultPoke from './Components/ResultPoke/ResultPoke';
import Home from './Pages/Home/Home';
import SliderCard from './Components/SliderCard/SliderCard';
import Legendaries from './Pages/Legendaries/Legendaries';
import Pokedex from './Pages/Pokedex/Pokedex';

function App() {
  return (
    <Router basename="/pokemon">
      <div className="App">
        <Switch>
          <Route exact path="/legendaries" component={Legendaries} />
          <Route exact path="/pokedex" component={Pokedex} />
          <Route exact path="/" component={Home} />
          <Route>
            <Error/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
