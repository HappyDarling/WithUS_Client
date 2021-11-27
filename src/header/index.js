import "./index.css";
import SyncRequest from "sync-request";
import { ReactComponent as AccountSVG } from "./images/person-circle.svg";
import React, { useState, useEffect } from "react";
import { Popover, Modal, Button } from "antd";
import { KakaoLogin, KakaoLogout } from "../auth/kakaoLogin/index";
import GoogleLogin, { GoogleLogout } from "react-google-login";
require("dotenv");

function Header() {
  const { Kakao } = window;

  // Login State 관리
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // 카카오 로그인 유지 (자체 함수 Validation)
    if (Kakao.Auth.getAccessToken()) {
      setIsLogin(true);
      Kakao.API.request({
        url: "/v2/user/me",
        success: function (response) {
          // 서버에 저장할 항목
          console.log(response);
          // 프로필 사진
          sessionStorage.setItem(
            "profileImg",
            response["kakao_account"]["profile"]["profile_image_url"]
          );
        },
        fail: function (error) {
          console.error(error);
        },
      });
    }
    // 구글 로그인 유지 (Sync 통신으로 Access Token Validation)
    else if (JSON.parse(sessionStorage.getItem("user"))) {
      var res = SyncRequest(
        "POST",
        `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${
          JSON.parse(sessionStorage.getItem("user"))["accessToken"]
        }`
      );

      if (res.statusCode == 200) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    }
  });

  // API KEY
  const REACT_APP_GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  // 비 로그인 상태에서 로그인 버튼을 클릭시 표시될 로고 스타일
  let login_view_logoStyle = {
    display: "block",
    margin: "0px auto",
  };

  // 내 정보 Style
  let myInfo = { textAlign: "center", fontFamily: "Jua", fontSize: "20px" };

  // Modal의 useState 관리
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSuccessGoogle = (auth) => {
    sessionStorage.setItem("user", JSON.stringify(auth));
    console.log(auth);
    window.history.go(0);
  };

  const onFailureGoogle = (err) => {
    console.error(err);
  };

  const onLogoutGoogle = (auth) => {
    sessionStorage.setItem("user", null);
    window.history.go(0);
  };

  // Popover Text 관리
  const text = <div style={myInfo}>Info</div>;
  const content = (
    <div className="profileContainer">
      <div className="OuterBox">
        <div className="box">
          <img src={sessionStorage.getItem("profileImg")} className="profile" />
        </div>
      </div>
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
        <GoogleLogout
          clientId={REACT_APP_GOOGLE_API_KEY}
          onLogoutSuccess={onLogoutGoogle}
        />
      </div>
    </div>
  );

  // 로그인 버튼 CSS
  const btnCSS = {
    backgroundColor: "#f4f4f4",
    color: "#012758",
    borderColor: "#f4f4f4",
  };

  // 비 로그인 상태의 로그인뷰
  const loginView_notLogin = (
    <div>
      <div className="col-md-9" id="account">
        <div className="header-account">
          <Button type="primary" onClick={showModal} size="large">
            <AccountSVG />
            <span id="login-text">로그인</span>
          </Button>
          <Modal
            title={
              <img
                src="./logo_Login.png"
                width="192px"
                style={login_view_logoStyle}
              />
            }
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={[]}
          >
            <p>
              {/* Google Login API */}
              <GoogleLogin
                clientId={REACT_APP_GOOGLE_API_KEY}
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
            <Button
              type="primary"
              onClick={showModal}
              size="large"
              style={btnCSS}
            >
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
