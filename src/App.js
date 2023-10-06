// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CompanyRegistration from './components/CompanyRegistration';
import AuthComponent from './components/AuthComponent';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <CompanyRegistration />
        </Route>
        <Route path="/auth">
          <AuthComponent />
        </Route>
        <Route path="/">
          <div>Home Page</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

        

