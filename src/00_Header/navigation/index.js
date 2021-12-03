import "./index.css";
import { Link } from "react-router-dom";

function Navigation() {
  var auth;

  return (
    <div>
      {/* <!-- NAVIGATION --> */}
      <nav id="navigation">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- NAV --> */}
          <ul className="main-nav nav navbar-nav">
            <li>
              <Link to="/">메인</Link>
            </li>
            <li>
              <Link to="/ndhelp">도움 요청</Link>
            </li>
            <li>
              <Link to="/gvhelp">도와 주기</Link>
            </li>
            <li>
              <Link to="/apply">IOT 신청</Link>
            </li>
            <li>
              {auth !== "manager" ? <div></div> : <Link to="#">회원 관리</Link>}
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
