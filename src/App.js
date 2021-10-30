import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Analytics from "./components/Analytics";
import Appearance from "./components/Appearance";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Appearance">
              <Appearance />
            </Route>
            <Route path="/Analytics">
              <Analytics />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
