import * as React from 'react';
import './App.css';
import Next5Page from '../../containers/Next5Page';
import RaceDetailsPage from '../../containers/RaceDetailsPage';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
const headerImage = require('../../images/ladbrokes-header-logo.png');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="app-header">
            <div className="inner">
              <Link to="/"><img src={headerImage} /></Link>
            </div>
          </div>
          <div className="inner">
            <Route exact={true} path="/" component={Next5Page} />
            <Route path="/race/:id/:name" component={RaceDetailsPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
