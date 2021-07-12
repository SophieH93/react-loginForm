import "./App.css";
import Login from "./Login";
import Profile from "./Profile";
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
