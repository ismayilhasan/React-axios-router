import './App.scss';

import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Cards from './components/Cards';

function App() {
  return (
    <Router>
      

       
        <Switch>
          <Route path="/">
          <Cards/>
          </Route>
         
        </Switch>
  
    </Router>
  );
}

export default App;
