import "./index.css";

function Navigation() {
  return (
    <div>
      {/* <!-- NAVIGATION --> */}
      <nav id="navigation">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- NAV --> */}
          <ul className="main-nav nav navbar-nav">
            <li className="active">
              <a href="/">메인</a>
            </li>
            <li>
              <a href="/ndhelp">도움 요청</a>
            </li>
            <li>
              <a href="#">도와 주기</a>
            </li>
            <li>
              <a href="/apply">IOT 신청</a>
            </li>
            <li>
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
