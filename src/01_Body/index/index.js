import "./index.css";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Carousel } from "antd";
import { Card, Avatar } from "antd";
import { CheckOutlined, ReadOutlined } from "@ant-design/icons";
require("dotenv");
const { Meta } = Card;

function IndexPage() {

  // 서버에서 게시글 목록을 받아오는 비동기 useEffect 구문
  const [postList, setPostList] = React.useState({ data: [] });
  React.useEffect(function () {
    axios
      .get(`${process.env.REACT_APP_Backend_Server}`)
      .then(function (result) {
        // 결과의 포스트 리스트를 추출할 수 있는 변수
        console.log(result);
        setPostList(result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {/* <!-- container --> */}
      <div className="container">
        <div id="carousel">
          <Carousel autoplay>
            <div>
              <Link to="/ndhelp">
                <img src="./images/slider_img/slider_help_board.png" alt="도움 요청으로 이동" style={{width:'100%'}} />
              </Link>                               
            </div>
            <div>
              <Link to="/gvhelp">
                <img src="./images/slider_img/slider_give_board.png" alt="도움 주기로 이동" style={{width:'100%'}} />
              </Link>              
            </div>
            <div>
              <Link to="/apply">
                <img src="./images/slider_img/slider_iot_apply.png" alt="도움 주기로 이동" style={{width:'100%'}} />
              </Link> 
            </div>
          </Carousel>
        </div>
        <div id="help-card">
          <div id="help-card-title">도움이 필요해요!</div>
          <div className="site-card-wrapper">
            {/* API URL에서 받은 데이터 부분으로 바꿔야 함 (CG) */}
            {postList.data.map(function (post, index) {
              return (
                <Card
                  key={index}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <Link to={`/read?id=${post.board_id}`}>
                      <ReadOutlined key="read" />
                    </Link>,
                    <CheckOutlined key="check" />,
                  ]}
                  style={{
                    width: "30%",
                    display: "inline-block",
                    margin: "10px",
                  }}
                >
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={post.board_title}
                    description={post.board_writer}
                  />
                </Card>
              );
            })}
          </div>
        </div>
        <div id="banner">
          {/* <!-- 우울증 극복 프로그램 연결 --> */}
          <div id="footer-banner" className="section">
            {/* <!-- container --> */}
            <div className="container">
              {/* <!-- row --> */}
              <div className="row">
                <div className="col-md-12">
                  <div className="footer-banner-content">
                    <h2 className="banner-txt1">
                      요즘 축축 처지고 의욕이 없어..
                    </h2>
                    <p className="banner-txt2">우울증이 의심되나요?</p>
                    <a
                      className="primary-btn cta-btn"
                      href="https://www.cyber1388.kr:447/"
                    >
                      사이버 상담센터 바로가기
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- /row --> */}
            </div>
            {/* <!-- /container --> */}
          </div>
          {/* <!-- /우울증 극복 프로그램 연결 --> */}
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
