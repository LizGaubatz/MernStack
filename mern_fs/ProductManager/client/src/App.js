import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import Main from './views/Main';
import ViewOne from './views/ViewOne';
import Update from './views/Update';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/product">
            <Main />
          </Route>
          <Route exact path="/product/:id">
            <ViewOne />
          </Route>
          <Route exact path="/product/:id/edit">
            <Update />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;



