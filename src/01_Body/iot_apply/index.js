import "./index.css";
import { Button } from "antd";
import { googleIsLogin } from "../../module/googleIsLogin";
import { kakaoIsLogin } from "../../module/kakaoIsLogin";
import { requireFieldCheck } from "../../API/requireFieldCheckAPI";

function IotApplyPage() {
  const { Kakao } = window;

  function iotApplyBtn() {
    if (Kakao.Auth.getAccessToken()) {
      kakaoIsLogin()
        .then()
        .catch((err) => {
          alert("인증 정보가 유효하지 않습니다!");
          window.location.href = `/apply`;
          return;
        });
    } else if (JSON.parse(sessionStorage.getItem("user"))) {
      googleIsLogin()
        .then()
        .catch((err) => {
          alert("인증 정보가 유효하지 않습니다!");
          window.location.href = `/apply`;
          return;
        });
    } else {
      alert("로그인이 되어있지 않습니다!");
      window.location.href = `/apply`;
      return;
    }

    // 사이트를 이용하기 위한 필수 Field들이 서버에 있는지 체크
    requireFieldCheck(sessionStorage.getItem("email"))
      .then((res) => {
        if (res === true) {
          window.location.href = `/applyField`;
          return;
        } else if (res === false) {
          alert(
            "사이트를 이용하기 위한 필수 값이 입력 되어있지 않아 입력 페이지로 이동합니다."
          );
          window.location.href = "/require";
          return;
        }
      })
      .catch((err) => {
        alert("에러가 발생하였습니다.");
        console.log(err);
        window.location.href = "/";
        return;
      });
  }

  return (
    <div>
      {/* <!-- container --> */}
      <div className="container">
        <div className="iot-wrapper">
          <div id="iot-apply-title">
            <p>IOT 신청하기</p>
          </div>
          <div id="iot-introduce">
            <div id="iot-img">
              <img src="./images/iot_img.png" alt="iot 사진"></img>
            </div>
            <div id="iot-p">
              <p>
                이 iot를 설치하세요!
                <br />
                당신에게 도움이 될 것입니다.
              </p>
            </div>
          </div>
          <div id="iot-apply-button">
            <Button type="primary" onClick={() => iotApplyBtn()} size="large">
              <span>신청하기</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IotApplyPage;
