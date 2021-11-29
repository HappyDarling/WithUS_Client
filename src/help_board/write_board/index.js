import "./index.css";
import SyncRequest from "sync-request";
import React, { useState } from "react";
import DaumPostCode from "react-daum-postcode";
import { Drawer, Row, Col, Form, Input, Button, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Option } = Select;
const { TextArea } = Input;

function WritePage() {
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
  const onPostFinish = async (values) => {
    values.addr1 = addr1;

    var res = SyncRequest(
      "POST",
      `https://cors-anywhere.herokuapp.com/http://api.vworld.kr/req/address?service=address&request=getcoord&address=${encodeURI(
        addr1
      )}&type=road&key=${process.env.REACT_APP_VWorld_API_KEY}`
    );

    if (res.status == "OK") {
      console.log(res.result.point.x);
      console.log(res.result.point.y);
    } else {
      console.log(res.body);
    }

    console.log("Received values of form: ", values);
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
                  <Input addonBefore="이름" disabled />
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
