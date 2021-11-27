import React from "react";

const { Kakao } = window;

// Login With KAKAO
const loginWithKakao = () => {
  try {
    return new Promise((resolve, reject) => {
      if (!Kakao) {
        reject("KAKAO 인스턴스를 찾을 수 없습니다.");
      }
      Kakao.Auth.login({
        success: (auth) => {
          sessionStorage.setItem("user", JSON.stringify(auth));
          window.history.go(0);
        },
        fail: (error) => {
          console.error(error);
        },
      });
    });
  } catch (err) {
    console.error(err);
  }
};

const KakaoLogin = () => {
  // 비 로그인 상태에서 로그인 버튼을 클릭시 표시될 로고 스타일
  let login_view_logoStyle = {
    display: "block",
    margin: "0px auto",
  };

  return (
    <div>
      <a id="custom-login-btn" onClick={loginWithKakao}>
        <img
          src="./images/snsLogin/kakao.png"
          width="222"
          width="300px"
          height="70px"
          style={login_view_logoStyle}
        />
      </a>
    </div>
  );
};

// Logout With KAKAO
const KakaoLogout = () => {
  try {
    return new Promise((resolve, reject) => {
      if (!Kakao) {
        reject("KAKAO 인스턴스를 찾을 수 없습니다.");
      }
      Kakao.Auth.logout(() => {
        sessionStorage.setItem("user", null);
        window.history.go(0);
      });
    });
  } catch (err) {
    console.error(err);
  }
};

export { KakaoLogin, KakaoLogout };
