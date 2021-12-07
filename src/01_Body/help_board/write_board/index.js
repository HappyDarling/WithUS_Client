// 반드시 Heroku Server WakeUp 한 뒤 진행

import "./index.css";
import SyncRequest from "sync-request";
import axios from "axios";
import React, { useState, useEffect } from "react";
import DaumPostCode from "react-daum-postcode";
import { Drawer, Row, Col, Form, Input, Button, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { requireFieldCheck } from "../../../API/requireFieldCheckAPI";
import { googleIsLogin } from "../../../module/googleIsLogin";
import { kakaoIsLogin } from "../../../module/kakaoIsLogin";
const { Option } = Select;
const { TextArea } = Input;

function WritePage() {
  const { Kakao } = window;

  // 로그인이 되어있는지 여부에 대한 체크
  useEffect(() => {
    if (Kakao.Auth.getAccessToken()) {
      kakaoIsLogin()
        .then()
        .catch((err) => {
          alert("인증 정보가 유효하지 않습니다!");
          window.history.go(-1);
          return;
        });
    } else if (JSON.parse(sessionStorage.getItem("user"))) {
      googleIsLogin()
        .then()
        .catch((err) => {
          alert("인증 정보가 유효하지 않습니다!");
          window.history.go(-1);
          return;
        });
    } else {
      alert("로그인이 되어있지 않습니다!");
      window.history.go(-1);
      return;
    }

    // 사이트를 이용하기 위한 필수 Field들이 서버에 있는지 체크
    requireFieldCheck(sessionStorage.getItem("email"))
      .then((res) => {
        console.log("res");
      })
      .catch((err) => {
        alert(
          "사이트를 이용하기 위한 필수 값이 입력 되어있지 않아 입력 페이지로 이동합니다."
        );
        console.log(err);
        return;
      });
  });

  // Drawer 변수 관리할 state
  const [state, setState] = useState(false);

  // Addr 변수 관리할 state
  const [addr1, setAddr1] = useState("");

  // Addr Drawer 관리 함수
  const showDrawer = () => {
    setState(true);
  };
  const onClose = () => {
    setState(false);
  };

  // 게시글 등록 Submit 함수
  const onPostFinish = (values) => {
    values.addr1 = addr1;

    // 주소 좌표 얻는 메서드
    var res = SyncRequest(
      "POST",
      `${
        process.env.REACT_APP_PROXY
      }http://api.vworld.kr/req/address?service=address&request=getcoord&address=${encodeURI(
        addr1
      )}&type=road&key=${process.env.REACT_APP_VWorld_API_KEY}`
    );
    console.log(res);

    if (JSON.parse(res.body).response.status === "OK") {
      axios
        .post(
          `${process.env.REACT_APP_Backend_Server}ndhelp/write`,
          {
            board_writer: sessionStorage.getItem("name"),
            board_ndid: sessionStorage.getItem("email"),
            board_title: values.title,
            board_content: values.content,
            board_category: values.category,
            board_start_date: "2012-12-30 14:11:23",
            board_end_date: "2012-12-30 14:11:23",
            board_lat: JSON.parse(res.body).response.result.point.y,
            board_lng: JSON.parse(res.body).response.result.point.x,
            board_addr: values.addr1 + "/" + values.addr2,
            board_region1Depth: JSON.parse(res.body).response.refined.structure
              .level1,
            board_region2Depth: JSON.parse(res.body).response.refined.structure
              .level2,
          },
          {
            headers: { "Content-Type": `application/json` },
          }
        )
        .then(function (result) {
          // 결과의 포스트 리스트를 추출할 수 있는 변수
          console.log(result);
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      console.error(res.body);
    }
  };

  // Drawer - Find PostCode
  const FindAddr = () => {
    // Addr Submit 함수
    const handleAddrFinish = (data) => {
      console.log(data.roadAddress);
      onClose();
      setAddr1(data.roadAddress);
    };

    const drawerStyle = {
      height: "800px",
    };

    return (
      <Form>
        <DaumPostCode onComplete={handleAddrFinish} style={drawerStyle} />
      </Form>
    );
  };

  return (
    <div className="container">
      <Drawer
        title="주소 검색"
        width={720}
        onClose={onClose}
        visible={state}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <FindAddr />
      </Drawer>
      <div id="layout">
        <Form onFinish={onPostFinish}>
          <Input.Group>
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item name="name">
                  <Input
                    addonBefore="이름"
                    defaultValue={sessionStorage.getItem("name")}
                    disabled
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="category">
                  <Select defaultValue="카테고리">
                    <Option value="노인">노인</Option>
                    <Option value="장애인">장애인</Option>
                    <Option value="아동">아동</Option>
                    <Option value="고독">고독</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Input.Group>
          <Input.Group>
            <Row gutter={8}>
              <Col span={12}>
                <Input.Group>
                  <Form.Item>
                    <div>
                      {addr1}
                      <span onClick={showDrawer}>
                        검색&nbsp;&nbsp;
                        <SearchOutlined />
                      </span>
                    </div>
                  </Form.Item>
                </Input.Group>
              </Col>
              <Col span={12}>
                <Form.Item name="addr2">
                  <Input
                    addonBefore="상세 주소"
                    placeholder="제목을 입력해주세요"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Input.Group>
          <Form.Item name="title">
            <Input addonBefore="제목" placeholder="제목을 입력해주세요" />
          </Form.Item>
          <Form.Item name="content">
            <TextArea
              placeholder="내용을 입력해주세요"
              autoSize={{ minRows: 20, maxRows: 20 }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              글쓰기
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default WritePage;