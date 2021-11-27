import "./index.css";
import { Row, Col, Card, Avatar } from "antd";
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function IndexPage() {
  const contentStyle = {
    height: "240px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  function IndexPage() {
    const suffix = (
      <AudioOutlined
        style={{
          fontSize: 16,
          color: '#1890ff',
        }}
      />
    );
  }

  const { Meta } = Card;

  const { Search } = Input;

  const onSearch = value => console.log(value);

  return (
    <div>
      {/* <!-- container --> */}
      <div className="container">
        {/* 도움 요청 게시판의 카테고리 */}
        <div id="categories">
            <div id="categories-icon">
                <a href="#" className="icon">
                    <img src="./images/icon/icon_elderly.png" alt="노인" />
                </a>
                <a href="#" className="icon">
                    <img src="./images/icon/icon_disabled.png" width="100px" />
                </a>
                <a href="#" className="icon">
                    <img src="./images/icon/icon_children.png" width="100px" />
                </a>
            </div>
        </div>
        {/* 도움 요청 게시글들 (카드 뷰) */}
        <div id="help-card">
          <div id="help-card-title">
            <p>도움 요청 게시판</p>
          </div>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <Card
                  style={{ width: 300 }}
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
                  style={{ width: 300 }}
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
                  style={{ width: 300 }}
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
                  style={{ width: 300 }}
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
                  style={{ width: 300 }}
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
                  style={{ width: 300 }}
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
                  style={{ width: 300 }}
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
                  style={{ width: 300 }}
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
                  style={{ width: 300 }}
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

export default IndexPage;
