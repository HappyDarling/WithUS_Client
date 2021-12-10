import "./index.css";
import { Button, Image } from 'antd';

function IotAppplyPage() {

  return (
    <div>
      {/* <!-- container --> */}
      <div className="container">        
        <div id="iot-wrapper">          
          <div id="iot-introduce">
            <div id="iot-title">
              <p>IOT 신청하기</p>
            </div>
            <div id="iot-introduce-left">
              <div id="iot-img">
                <Image
                  height={'400px'}
                  src="./images/iot_img/iot_img.png"
                />
              </div>
            </div>
            <div id="iot-introduce-right">
              <p id="iot-p">
                iot 설명 1
              </p>
              <p id="iot-p">
                iot 설명 2
              </p>
              <p id="iot-p">
                iot 설명 3
              </p>
              <p id="iot-p">
                iot 설명 4
              </p>
            </div>
          </div>
          <div id="iot-button">
            <Button
              //onClick={}
              size="large"
              type="default"
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