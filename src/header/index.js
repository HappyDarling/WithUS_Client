import "./index.css";
import { ReactComponent as AccountSVG } from "./images/person-circle.svg";
import React, { useState, useEffect } from "react";
import { Popover, Modal, Button } from "antd";
import { KakaoLogin, KakaoLogout } from "../auth/kakaoLogin/index";
import GoogleLogin from "react-google-login";
require("dotenv");

function Header() {
  const { Kakao } = window;

  // Login State 관리
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (Kakao.Auth.getAccessToken()) {
      setIsLogin(true);
    }
  });

  // API KEY
  const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

  // 비 로그인 상태에서 로그인 버튼을 클릭시 표시될 로고 스타일
  let login_view_logoStyle = {
    display: "block",
    margin: "0px auto",
  };

  // Modal의 useState 관리
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSuccessGoogle = (auth) => {
    console.log(auth);
  };

  const onFailureGoogle = (err) => {
    console.error(err);
  };

  // Popover Text 관리
  const text = <span>Title</span>;
  const content = (
    <div>
      <div>
        <a id="custom-login-btn" onClick={KakaoLogout}>
          <img
            src="./images/snsLogin/kakao.png"
            width="222"
            width="300px"
            height="70px"
            style={login_view_logoStyle}
          />
        </a>
      </div>
    </div>
  );

  // 비 로그인 상태의 로그인뷰
  const loginView_notLogin = (
    <div>
      <div className="col-md-9" id="account">
        <div className="header-account">
          <Button type="primary" onClick={showModal} size="large" danger>
            <AccountSVG />
            <span id="login-text">로그인</span>
          </Button>
          <Modal
            title={
              <img
                src="./logo.png"
                width="192px"
                style={login_view_logoStyle}
              />
            }
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={[]}
          >
            <p>
              <GoogleLogin
                clientId={GOOGLE_API_KEY}
                render={(renderProps) => (
                  <a onClick={renderProps.onClick}>
                    <img
                      width="300px"
                      height="70px"
                      src="./images/snsLogin/google.png"
                      style={login_view_logoStyle}
                    />
                  </a>
                )}
                onSuccess={onSuccessGoogle}
                onFailure={onFailureGoogle}
              />
            </p>
            <p>
              <KakaoLogin />
            </p>
            <p>
              <img
                src="./images/snsLogin/naver.png"
                width="300px"
                height="70px"
                style={login_view_logoStyle}
              />
            </p>
          </Modal>
        </div>
      </div>
    </div>
  );

  // 로그인 상태의 로그인뷰
  const loginView_Login = (
    <div>
      <div className="col-md-9" id="account">
        <div className="header-account">
          <Popover
            placement="bottom"
            title={text}
            content={content}
            trigger="click"
          >
            <Button type="primary" onClick={showModal} size="large" danger>
              <AccountSVG />
              <span id="login-text">내정보</span>
            </Button>
          </Popover>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* <!-- HEADER --> */}
      <header>
        {/* <!-- MAIN HEADER --> */}
        <div id="header">
          {/* <!-- container --> */}
          <div className="container">
            {/* <!-- row --> */}
            <div className="row" id="row">
              {/* <!-- LOGO --> */}
              <div className="col-md-3">
                <div className="header-logo">
                  <a href="/" className="logo">
                    <img src="./logo.png" width="192px" />
                  </a>
                </div>
              </div>
              {/* <!-- /LOGO --> */}

              {/* <!-- ACCOUNT --> */}
              {isLogin ? loginView_Login : loginView_notLogin}
              {/* <!-- ACCOUNT --> */}
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- container --> */}
        </div>
        {/* <!-- /MAIN HEADER --> */}
      </header>
      {/* <!-- /HEADER --> */}
    </div>
  );
}

export default Header;
