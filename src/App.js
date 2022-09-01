import './App.scss';

import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Cards from './components/Cards';
import Home from './components/Home';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact >
          <Home/>  
          </Route>
          <Route path="/Cards" exact>
              <Cards/>
          </Route>
          <Route path="/Cards/comments">
                
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
