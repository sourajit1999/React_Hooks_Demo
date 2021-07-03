import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );

}

export default App;
