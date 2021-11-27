const { Kakao } = window;
const loginWithKakao = () => {
  try {
    return new Promise((resolve, reject) => {
      if (!Kakao) {
        reject("ERROR");
      }
      Kakao.Auth.login({
        success: (auth) => {
          console.log(auth);
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

export default KakaoLogin;
