import "./index.css";
import { Button, Image } from 'antd';

function IotAppplyPage() {

  return (
    <div>
      {/* <!-- container --> */}
      <div className="container">
        <div id="iot-title">
          <p>사용자 움직임 이상 감지 서비스</p>
        </div>        
        <div id="iot-wrapper">             
          <div id="iot-introduce">            
            <div id="iot-introduce-left">
              <div id="iot-img">
                <Image
                  width={'100%'}
                  src="./images/iot_img/iot_img.png"
                />
              </div>
            </div>
            <div id="iot-introduce-right">
              <p id="iot-p">
                당신의 움직임을 iot 센서가 감지하여<br />정각마다 1시간 동안의 움직임 정보를<br />인공지능 서버에 전달합니다.
              </p>
              <p id="iot-p">
                인공지능 서버에서는 받아온 정보를 토대로<br />이상 탐지를 시행합니다.
              </p>
              <p id="iot-p">
                움직임 정보에 이상이 탐지되면<br />iot에서 사이렌이 울립니다.
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