import "./index.css";
var parse = require("url-parse");

function Navigation() {
  console.log();
  return (
    <div>
      {/* <!-- NAVIGATION --> */}
      <nav id="navigation">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- NAV --> */}
          <ul className="main-nav nav navbar-nav">
            <li className={parse()["pathname"] === "/" ? "active" : ""}>
              <a href="/">메인</a>
            </li>
            <li className={parse()["pathname"] === "/ndhelp" ? "active" : ""}>
              <a href="/ndhelp">도움 요청</a>
            </li>
            <li className={parse()["pathname"] === "/gvhelp" ? "active" : ""}>
              <a href="/gvhelp">도와 주기</a>
            </li>
            <li
              className={parse()["pathname"] === "/dddddddddd" ? "active" : ""}
            >
              <a href="/apply">IOT 신청</a>
            </li>
            <li
              className={parse()["pathname"] === "/dddddddddd" ? "active" : ""}
            >
              <a href="#">회원 관리</a>
            </li>
          </ul>
          {/* <!-- /NAV --> */}
        </div>
        {/* <!-- /container --> */}
      </nav>
      {/* <!-- /NAVIGATION --> */}
    </div>
  );
}

export default Navigation;
