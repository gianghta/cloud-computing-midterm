import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

// Components
import { Test } from './components/Test';
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            {/*<Route exact path="/" component={Test} />*/}
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
