import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import Main from './views/Main';
import New from './views/New';
import Edit from './views/Edit';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/author/new">
            <New />
          </Route>
          <Route exact path="/author/edit/:id">
            <Edit />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
