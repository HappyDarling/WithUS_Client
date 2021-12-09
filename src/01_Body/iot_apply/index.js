import "./index.css";
import { Button } from 'antd';

function IotAppplyPage() {

  return (
    <div>
      {/* <!-- container --> */}
      <div className="container">
        <div id="iot-title">
          <p>IOT 신청하기</p>
        </div>
        <div id="iot-wrapper">          
          <div id="iot-introduce">
            <div id="iot-introduce-left">
              <img src="./images/iot_img/iot_icon.png" id="iot-img" alt="iot 사진"></img>
            </div>
            <div id="iot-introduce-right">
              <p id="iot-p">
                이 iot를 설치하세요!
                <br />
                당신에게 도움이 될 것입니다.
              </p>
            </div>
          </div>
          <div id="iot-button">
            <Button
              //onClick={}
              size="large"
              type="primary"
            >
              <span>신청하기</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IotAppplyPage;
