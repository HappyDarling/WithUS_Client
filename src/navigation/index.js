import "./index.css";
import { Link } from "react-router-dom";
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
              <Link to="/">메인</Link>
            </li>
            <li className={parse()["pathname"] === "/ndhelp" ? "active" : ""}>
              <Link to="/ndhelp">도움 요청</Link>
            </li>
            <li className={parse()["pathname"] === "/gvhelp" ? "active" : ""}>
              <Link to="/gvhelp">도와 주기</Link>
            </li>
            <li
              className={parse()["pathname"] === "/dddddddddd" ? "active" : ""}
            >
              <Link to="/apply">IOT 신청</Link>
            </li>
            <li
              className={parse()["pathname"] === "/dddddddddd" ? "active" : ""}
            >
              <Link to="#">회원 관리</Link>
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
