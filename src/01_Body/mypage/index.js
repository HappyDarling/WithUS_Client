import "./index.css";
import React from "react";
import { Image, Switch, List, Avatar, Menu, Dropdown } from "antd";
import { MoreOutlined } from "@ant-design/icons";

function MyPage() {
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  const [disabled, setDisabled] = React.useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  const post_detail = {
    board_id: 1,
    board_writer: "김테스트",
    board_title: "제에에에목",
    board_content: "서울역 근처에서 이틀간 노인 돌봄이 필요합니다.",
    board_event_time: "2021-12-03 02:35:11",
    board_start_date: "2021-12-10",
    board_end_date: "2021-12-11",
    board_category: "노인",
    board_lat: 37.554722,
    board_lng: 126.970833,
    //위치(board_addr, board_region1Depth, board_region2Depth)
  };

  const listData = [];
  for (let i = 0; i < 10; i++) {
    listData.push({
      href: "#", //해당 게시글(상세페이지)로 이동
      title: post_detail.board_title,
      avatar: "https://joeschmoe.io/api/v1/random",
      description: post_detail.board_event_time,
      content: post_detail.board_content,
    });
  }

  //예시 데이터 (유저)
  const mypage_info = {
    idx: 1,
    name: "김테스트",
    email: "123@gmail.com",
    birth: "1983/09/12",
    sex: "남성",
    iot: "Y",
  };

  const menu = (
    <Menu
    //onClick={}
    >
      <Menu.Item key="1">내 정보 수정하기</Menu.Item>
    </Menu>
  );

  function Profile() {
    return (
      <table id="profile-table">
        <tr>
          <td colSpan="2" id="profile-table-img">
            {/*소셜 로그인의 프로필 사진*/}
            <Image
              width={"100%"}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </td>
        </tr>
        <tr>
          <td id="profile-table-info-title">MY INFO</td>
          <td id="profile-table-info-ddbutton">
            <Dropdown overlay={menu} placement="bottomRight">
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <MoreOutlined />
              </a>
            </Dropdown>
          </td>
        </tr>
        <tr>
          <td colSpan="2" id="profile-table-info">
            {mypage_info.name}
          </td>
        </tr>
        <tr>
          <td colSpan="2" id="profile-table-info">
            {mypage_info.email}
          </td>
        </tr>
        <tr>
          <td colSpan="2" id="profile-table-info">
            {mypage_info.birth}
          </td>
        </tr>
        <tr>
          <td colSpan="2" id="profile-table-info">
            {mypage_info.sex}
          </td>
        </tr>
        <tr>
          <td id="profile-table-info-iot">
            IOT 신청여부 :&nbsp;{mypage_info.iot}
          </td>
          <td id="profile-table-info-bottom">
            <Switch
              //disabled={disabled} //IOT 신청 안한 사람의 경우 disabled
              checkedChildren="IOT 켜짐"
              unCheckedChildren="IOT 꺼짐"
              defaultChecked
              onChange={onChange}
            />
          </td>
        </tr>
      </table>
    );
  }

  function MyPost() {
    return (
      <div id="mypost-div">
        <List
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "30px",
          }}
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={listData}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              extra={
                <img
                  width={"200px"}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    );
  }

  return (
    <div id="mypage-back-color">
      {/* <!-- container --> */}
      <div className="container">
        <div className="mypage-wrapper">
          <div id="mypage-layout-left">
            <Profile />
          </div>
          <div id="mypage-layout-right">
            <MyPost />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
