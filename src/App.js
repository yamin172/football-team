import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Component/Header/Header';
import Clubs from './Component/Club/Clubs';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClubDetails from './Component/ClubDetails/ClubDetails';

function App() {
  
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Clubs />
        </Route>
        <Route path="/club/:idTeam">
          <ClubDetails />
        </Route>
        <Route path="*">
          <h1 className="text-center mt-lg-5">404 not found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
