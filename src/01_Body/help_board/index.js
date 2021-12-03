import "./index.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { Row, Col, Card, Avatar } from "antd";
import { Input, Space } from "antd";
import { Pagination } from "antd";
import {
  ReadOutlined,
  CheckOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
var parse = require("url-parse");
const { Meta } = Card;
const { Search } = Input;

function HelpBoardPage() {
  // 카테고리 변경 감지 State
  const [category, setCategory] = useState("");

  // 서버에서 게시글 목록을 받아오는 비동기 useEffect 구문
  // const [postList, setPostList] = React.useState([]);
  // React.useEffect(function () {
  //   axios
  //     .get(process.env.API_URL_RecentPostList)
  //     .then(function (result) {
  //       // 결과의 포스트 리스트를 추출할 수 있는 변수
  //       const posts = result;
  //       setPostList(posts);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  const onSearch = (value) => console.log(value);

  return (
    <div>
      {/* <!-- container --> */}
      <div className="container">
        <div id="help-card-header">
          <div id="help-title">도움 요청 게시판</div>
        </div>
        {/* 도움 요청 게시판의 카테고리 */}
        <div id="categories">
          <div id="categories-icon">
            <a
              className="icon"
              onClick={() => {
                setCategory("elderly");
              }}
            >
              <img src="./images/icon/icon_elderly.png" alt="노인" />
            </a>
            <a
              className="icon"
              onClick={() => {
                setCategory("disabled");
              }}
            >
              <img
                src="./images/icon/icon_disabled.png"
                alt="장애인"
                width="100px"
              />
            </a>
            <a
              className="icon"
              onClick={() => {
                setCategory("children");
              }}
            >
              <img
                src="./images/icon/icon_children.png"
                alt="어린이"
                width="100px"
              />
            </a>
            <a
              className="icon"
              onClick={() => {
                setCategory("lonley");
              }}
            >
              <img
                src="./images/icon/icon_lonley.png"
                alt="고독"
                width="100px"
              />
            </a>
          </div>
        </div>
        {/* 도움 요청 게시글들 (카드 뷰) */}
        <div id="help-card">
          <div className="site-card-wrapper">
            <div id="write-button">
              <Button type="primary" size="large">
                <Link to="/write">글 쓰기</Link>
              </Button>
            </div>
            <Row gutter={16}>
              <Col span={8}>
                <Card
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <ReadOutlined key="read" />,
                    <CheckOutlined key="check" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
            </Row>
            <div className="margin"></div>
            <Row gutter={16}>
              <Col span={8}>
                <Card
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
            </Row>
            <div className="margin"></div>
            <Row gutter={16}>
              <Col span={8}>
                <Card
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        {/* 게시글 검색 */}
        <div id="search">
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              allowClear
              enterButton="검색"
              size="large"
              onSearch={onSearch}
            />
          </Space>
        </div>
        {/* 페이지 넘기기 */}
        <div id="pagnation">
          <Pagination simple defaultCurrent={1} total={50} />
          <br />
          {/* <Pagination disabled simple defaultCurrent={1} total={50} /> */}
        </div>
      </div>
    </div>
  );
}

export default HelpBoardPage;
