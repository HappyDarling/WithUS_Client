import "./index.css";
import { Button } from 'antd';

function IndexPage() {

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
                이 iot를 설치하세요!<br />
                당신에게 도움이 될 것입니다.
              </p>
            </div>
          </div>
          <div id="iot-apply-button">
            <Button
              type="primary"
              //onClick={}
              size="large"
            >
              <span>신청하기</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
