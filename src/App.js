import "./App.css";
import "antd/dist/antd.css";
import IndexPage from "./index/index";
import Header from "./header/index";
import Navigation from "./navigation/index";
import Help_board from "./help_board/index";
import { Link, Route, Switch } from "react-router-dom";

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
          <Route exact="true"path={"/ndhelp"}>
            <Help_board />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
