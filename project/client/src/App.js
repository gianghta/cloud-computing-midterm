import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

// Components
import { Test } from './components/Test';
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import GlobalToolbar from "./components/GlobalToolbar/GlobalToolbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalToolbar />
        <BrowserRouter>
          <Switch>
            {/*<Route exact path="/" component={Test} />*/}
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
