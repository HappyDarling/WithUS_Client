import "./App.css";
import "antd/dist/antd.css";
import IndexPage from "./index/index";
import GVHelpPage from "./gvhelp/index";
import Help_board from "./help_board/index";
import Iot_apply from "./iot_apply/index";
import MngMember from "./mngmember/index";
import MyPage from "./mypage/index";
import ReadBD from "./help_board/read_board/index";
import Header from "./header/index";
import Navigation from "./navigation/index";
import Footer from "./footer/index";
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
        {/* 메뉴 (도움요청 게시판, 도움 주기, iot 신청, 마이페이지) */}
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
          {/* 도움 주기 */}
          <Route exact="true" path={"/gvhelp"}>
            <GVHelpPage />
          </Route>
          {/* iot 신청 */}
          <Route exact="true" path={"/apply"}>
            <Iot_apply />
          </Route>
          {/* 회원 관리 */}
          <Route exact="true" path={"/mngmember"}>
            <MngMember />
          </Route>
          {/* 마이페이지(스타일 보려고 잠깐 여기에 둠) */}
          <Route exact="true" path={"/mypage"}>
            <MyPage />
          </Route>
          {/* 게시글 읽기(스타일 보려고 잠깐 여기에 둠) */}
          <Route exact="true" path={"/detail"}>
            <ReadBD />
          </Route>
        </Switch>
      </div>
      <Affix offsetBottom={40} style={{ position: "absolute", right: 50 }}>
        <Button type="primary" onClick={() => console.log("TALKBOT CLICK")}>
          TALKBOT
        </Button>
      </Affix>
      <div id="footer">
        <Footer />
      </div>      
    </div>
  );
}

export default App;
