import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import * as Icon from 'react-feather';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import {useDispatch} from 'react-redux';
import './index.scss';
import { showWindow } from './actions';
import backgroundImage from './backgroundImage.jpg';


function App() {
  const dispatch = useDispatch();

  return (
    <div className="App" style={{backgroundImage: `url(${backgroundImage})`}}>
      <Router>
          <nav>
            <ul>
              <li>
                <Link to="/" onClick={() => dispatch(showWindow(true))}><Icon.Home />Home</Link>
              </li>
              <li>
                <Link to="/projects" onClick={() => dispatch(showWindow(true))}><Icon.Briefcase />Projects</Link>
              </li>
            </ul>
          </nav>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
