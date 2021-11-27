import "./App.css";
import "antd/dist/antd.css";
import IndexPage from "./index/index";
import Header from "./header/index";
import Navigation from "./navigation/index";
import { Link, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    if (sessionStorage.getItem("user") !== null) {
      console.log("useEffect2");
      setIsLogin(true);
    }
  });

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
            <IndexPage islogin={isLogin} />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
