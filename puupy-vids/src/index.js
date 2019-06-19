import React from 'react';
import ReactDOM from 'react-dom';
import Upload from './components/Upload';
import Display from './components/Display';
import Callback from './components/Callback';
import * as serviceWorker from './serviceWorker';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';
import { requireAuth } from './utils/AuthService';
import PropTypes from 'prop-types';

const Root = () => { 
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={Display} />
        <Route path="/upload" component={Upload} />
        <Route path="/callback" component={Callback} />
      </Router>
    </div>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();