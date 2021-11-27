import "./index.css";
import { Button } from 'antd';

function IndexPage() {

  return (
    <div>
      {/* <!-- container --> */}
      <div className="container">
        <div id="iot-apply-title">
            <p>IOT 신청하기</p>
        </div>
        <div id="iot-img">
            <img src="./images/iot_img.png" alt="iot 사진"></img>
        </div>
        <div id="iot-apply-button">
            <Button>신청하기</Button>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
