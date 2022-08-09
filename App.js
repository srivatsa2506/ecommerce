import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
    <div className="app">
       <Switch>
         <Route  path="/login"><h1>Login</h1></Route>
         <Route  path="/checkout"><h1>checkout</h1></Route>
         <Route  path="/"><Header/><Home/><h1>HI</h1></Route>
       </Switch>
     
    </div>
    </Router>
    
  );
}

export default App;
