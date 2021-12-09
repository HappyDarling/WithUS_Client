import "./App.css";
import "antd/dist/antd.css";
<<<<<<< HEAD
import Header from "./00_Header/header/index";
import Navigation from "./00_Header/navigation/index";
import IndexPage from "./01_Body/index/index";
import MyPage from "./01_Body/mypage/index";
import GVHelpPage from "./01_Body/give_board/index";
import HelpBoardPage from "./01_Body/help_board/index";
import WritePage from "./01_Body/help_board/write_board/index";
import ReadPage from "./01_Body/help_board/read_board/index";
import ModifyPage from "./01_Body/help_board/modify_board/index";
import IotApplyPage from "./01_Body/iot_apply/index";
import RequireBoardPage from "./01_Body/require_board/index";
import Footer from "./02_Footer/footer/index";
import { Route, Switch } from "react-router-dom";
=======
import IndexPage from "./index/index";
import GVHelpPage from "./gvhelp/index";
import Help_board from "./help_board/index";
import Iot_apply from "./iot_apply/index";
import MngMember from "./mngmember/index";
import MyPage from "./mypage/index";
import Header from "./header/index";
import Navigation from "./navigation/index";
import { Link, Route, Switch } from "react-router-dom";
>>>>>>> 455cd16846ed7c9c18f8fe821bb81a3c485e6895
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
          {/* 메인 페이지 */}
          <Route exact path={"/"}>
            <IndexPage />
          </Route>
          {/* 필수 정보 요구 페이지 */}
          <Route exact path={"/require"}>
            <RequireBoardPage />
          </Route>
          {/* 마이 페이지 */}
          <Route exact path={"/mypage"}>
            <MyPage />
          </Route>
          {/* 도움 요청 게시판 글쓰기 */}
          <Route exact path={"/write"}>
            <WritePage />
          </Route>
          {/* 도움 요청 게시판 글읽기 */}
          <Route exact path={"/read"}>
            <ReadPage />
          </Route>
          {/* 도움 요청 게시판 글읽기 */}
          <Route exact path={"/modify"}>
            <ModifyPage />
          </Route>
          {/* 도움 요청 게시판 */}
          <Route exact path={"/ndhelp"}>
            <HelpBoardPage />
          </Route>
          {/* 도움 주기 게시판 */}
          <Route exact path={"/gvhelp"}>
            <GVHelpPage />
          </Route>
          {/* iot 신청 */}
          <Route exact path={"/apply"}>
            <IotApplyPage />
          </Route>
          {/* 회원 관리 */}
          <Route exact="true" path={"/mngmember"}>
            <MngMember />
          </Route>
          {/* 마이페이지 */}
          <Route exact="true" path={"/mypage"}>
            <MyPage />
          </Route>
        </Switch>
      </div>
<<<<<<< HEAD
      <Affix offsetBottom={10} style={{ position: "absolute", right: 10 }}>
=======
      <div id="footer"></div>
      <Affix offsetBottom={10} style={{ position: "absolute", right: 50 }}>
>>>>>>> 455cd16846ed7c9c18f8fe821bb81a3c485e6895
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
