import './App.css';
import { Route, Switch } from 'react-router-dom';
import People from './components/People';
import Planet from './components/Planet';
import Search from './components/search';
import Error from './components/Error';

import { useHistory } from 'react-router-dom';

function App() {

const history = useHistory();
console.log("history: " +history)

  return (
    <div className="App">
      <h1>Luke APIWalker</h1>
      <hr />
      <Search history={ history }/>
      <Switch>
        <Route exact path="/people/:id">
          <People  history={history}/>
        </Route>
        <Route exact path="/planets/:id">
          <Planet  history={history} />
        </Route>
        <Route path="/:error">
          <Error/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;