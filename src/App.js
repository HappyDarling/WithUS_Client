import "./App.css";
import "antd/dist/antd.css";
import IndexPage from "./index/index";
import GVHelpPage from "./gvhelp/index";
import Header from "./header/index";
import Navigation from "./navigation/index";
import { Route, Switch } from "react-router-dom";
import { Affix, Button } from "antd";

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
          <Route exact="true" path={"/gvhelp"}>
            <GVHelpPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
      <Affix offsetBottom={10} style={{ position: "absolute", right: 10 }}>
        <Button type="primary" onClick={() => console.log("TALKBOT CLICK")}>
          TALKBOT
        </Button>
      </Affix>
    </div>
  );
}

export default App;
