import "./index.css";
import { ReactComponent as AccountSVG } from "./images/person-circle.svg";
import React, { useState } from "react";
import { Modal, Button } from "antd";
import KakaoLogin from "../auth/kakaoLogin/index";
import GoogleLogin from "react-google-login";

function Header() {
  const GOOGLE_API_KEY =
    "869809387867-u4m7p0bji64928mgljadlq0a68pd3f02.apps.googleusercontent.com";

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
                  <a href="#" className="logo">
                    <img src="./logo.png" width="192px" />
                  </a>
                </div>
              </div>
              {/* <!-- /LOGO --> */}

              {/* <!-- ACCOUNT --> */}
              <div className="col-md-9" id="account">
                <div className="header-account">
                  <Button
                    type="primary"
                    onClick={showModal}
                    size="large"
                    danger
                  >
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
