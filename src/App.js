import "./App.css";
import "antd/dist/antd.css";
import IndexPage from "./index/index";
import Header from "./header/index";
import Navigation from "./navigation/index";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <div id="header">
        <Header />
      </div>
      <div id="navigation">
        <Navigation />
      </div>
      <div id="body">
        <Switch>
          <Route exact="true" path={"/"}>
            <IndexPage />
          </Route>
          <Route exact="true" path={"/result"}>
            <IndexPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
