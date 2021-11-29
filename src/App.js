import "./App.css";
import "antd/dist/antd.css";
import IndexPage from "./index/index";
import GVHelpPage from "./gvhelp/index";
import Help_board from "./help_board/index";
import Iot_apply from "./iot_apply/index";
import Header from "./header/index";
import Navigation from "./navigation/index";
import { Link, Route, Switch } from "react-router-dom";
import { Affix, Button } from "antd";

function App() {
  return (
    <div>
      <div id="header">
        {/* 헤더 (사이트 로고, 로그인) */}
        <Header />
      </div>
      <div id="navigation">
        {/* 메뉴 (도움요청 게시판, 헬프맵, iot 신청, 마이페이지) */}
        <Navigation />
      </div>

      <div id="body">
        <Switch>
          {/* 메인페이지 */}
          <Route exact="true" path={"/"}>
            <IndexPage />
          </Route>
          {/* 도움 요청 게시판 */}
          <Route exact="true" path={"/ndhelp"}>
            <Help_board />
          </Route>
          {/* 도움 주기 게시판 */}
          <Route exact="true" path={"/gvhelp"}>
            <GVHelpPage />
          </Route>
          {/* iot 신청 */}
          <Route exact="true" path={"/apply"}>
            <Iot_apply />
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
