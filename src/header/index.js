import "./index.css";
import SyncRequest from "sync-request";
import React, { useState, useEffect } from "react";
import { Popover, Modal, Button } from "antd";
import { KakaoLogin, KakaoLogout } from "../auth/kakaoLogin/index";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { UserOutlined, MehOutlined, LogoutOutlined } from "@ant-design/icons";
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
          // 이메일
          sessionStorage.setItem("email", response["kakao_account"]["email"]);
          // 이름
          sessionStorage.setItem("name", response["properties"]["nickname"]);
          sessionStorage.setItem("auth", "kakao");
        },
        fail: function (error) {
          console.error(error);
          KakaoLogout();
        },
      });
    }
    // 구글 로그인 유지 (Sync 통신으로 Access Token Validation)
    else if (JSON.parse(sessionStorage.getItem("user"))) {
      var res = SyncRequest(
        "POST",
        `/map/oauth2/v1/tokeninfo?access_token=${
          JSON.parse(sessionStorage.getItem("user"))["accessToken"]
        }`
      );

      if (res.statusCode == 200) {
        setIsLogin(true);
        sessionStorage.setItem("auth", "google");
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
  // popover 버튼 Style
  let btn = { width: "200px", marginTop: "10px" };

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
    sessionStorage.clear();
    window.history.go(0);
  };

  // 각 SNS별 로그아웃 기능
  const googleLogout = (
    <div>
      <GoogleLogout
        clientId={REACT_APP_GOOGLE_API_KEY}
        render={(renderProps) => (
          <a onClick={renderProps.onClick}>
            <Button icon={<LogoutOutlined />} size="large" style={btn}>
              로그아웃
            </Button>
          </a>
        )}
        onLogoutSuccess={onLogoutGoogle}
      />
    </div>
  );
  const kakaoLogout = (
    <div>
      <a id="custom-login-btn" onClick={KakaoLogout}>
        <Button icon={<LogoutOutlined />} size="large" style={btn}>
          로그아웃
        </Button>
      </a>
    </div>
  );

  // Popover Text 관리
  const text = <div style={myInfo}>Info</div>;
  const content = (
    <div className="profileContainer">
      <div className="OuterBox">
        <div className="box">
          <img src={sessionStorage.getItem("profileImg")} className="profile" />
        </div>
        <div>
          <div className="email_name">{sessionStorage.getItem("name")}</div>
          <div className="email_name">{sessionStorage.getItem("email")}</div>
        </div>
      </div>
      <div id="myPage">
        <Button icon={<MehOutlined />} size="large" style={btn}>
          마이페이지
        </Button>
      </div>
      <div id="logout">
        {sessionStorage.getItem("auth") === "kakao"
          ? kakaoLogout
          : googleLogout}
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
          <Button
            onClick={showModal}
            icon={<UserOutlined />}
            size="large"
            style={btnCSS}
          >
            로그인
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
              onClick={showModal}
              icon={<UserOutlined />}
              size="large"
              style={btnCSS}
            >
              내정보
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
