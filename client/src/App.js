import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Messagelist from './components/MessageList';
import MessageForm from './components/MessageForm';
import { Navigation } from './components/Navbar';

import 'bootswatch/dist/litera/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <switch>
          <Route exact path="/" component={Messagelist} />
          <Route exact path="/new-message" component={MessageForm} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
