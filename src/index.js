import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";
import TopMenu from "./common/topMenu/TopMenu";
import "./index.css";
const DATA = require("./constants/data.json");
function App() {
  return (
    <Router>
      <TopMenu />
      <Switch>
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route
          path="/destination"
          exact
          render={(props) => (
            <Destination data={DATA.destinations} {...props} />
          )}
        />
        <Route
          path="/crew"
          exact
          render={(props) => <Crew data={DATA.crew} {...props} />}
        />
        <Route
          path="/technology"
          exact
          render={(props) => <Technology data={DATA.technology} {...props} />}
        />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
