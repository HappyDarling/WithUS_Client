import "./index.css";
import axios from "axios";
import SyncRequest from "sync-request";
import React, { useEffect, useState } from "react";
import convertMonth from "../../module/convertMonth";
import {
  Image,
  Switch,
  List,
  Avatar,
  Menu,
  Dropdown,
  Radio,
  Modal,
  Button,
  Input,
  Form,
  DatePicker,
  Tag
} from "antd";
import { MoreOutlined, CheckCircleOutlined, CarryOutOutlined, ClockCircleOutlined } from "@ant-design/icons";

function MyPage() {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [birth, setBirth] = useState("");
  var [sex, setSex] = useState("");
  var [iot, setIot] = useState(false);

  useEffect(function () {
    var res = SyncRequest(
      "GET",
      `${
        process.env.REACT_APP_Backend_Server_User
      }api/user/fbe/${sessionStorage.getItem("email")}`
    );

    setName(JSON.parse(res.body).name);
    setEmail(JSON.parse(res.body).email);
    setSex(JSON.parse(res.body).sex);
    setIot(JSON.parse(res.body).iot);

    console.log(JSON.parse(res.body).birth.split(" "));
    setBirth(
      JSON.parse(res.body).birth.split(" ")[3] +
        "/" +
        convertMonth(JSON.parse(res.body).birth.split(" ")[1]) +
        "/" +
        JSON.parse(res.body).birth.split(" ")[2]
    );
  });

  //예시데이터 (게시글)
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

  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  const [disabled, setDisabled] = React.useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  const options = [
    { label: "전체", value: "전체" },
    { label: "요청", value: "요청" },
    { label: "지원", value: "지원" },
  ];

  class RadioBtn extends React.Component {
    state = {
      value: "전체",
    };

    onRadioChange = (e) => {
      console.log("radio checked", e.target.value);
      this.setState({
        value: e.target.value,
      });
    };

    render() {
      const { value } = this.state;
      return (
        <Radio.Group
          options={options}
          onChange={this.onRadioChange}
          value={value}
          optionType="button"
          buttonStyle="solid"
        />
      );
    }
  }

  class ProfileModify extends React.Component {
    state = {
      visible: false,
    };

    showModal = () => {
      this.setState({
        visible: true,
      });
    };

    handleCancel = () => {
      this.setState({ visible: false });
    };

    render() {
      const { visible } = this.state;

      //수정된 개인정보 db에 업데이트
      const onModify = (values) => {
        var data = {
          name: values.name,
          birth: values.birth._d.toString(),
          sex: values.sex,
        };
        axios
          .put(
            `${
              process.env.REACT_APP_Backend_Server_User
            }api/user/update/${sessionStorage.getItem("email")}`,
            data,
            {
              headers: { "Content-Type": `application/json` },
            }
          )
          .then(function (result) {
            alert("정상적으로 내 정보 저장이 완료되었습니다!");
            window.history.go(0);
          })
          .catch(function (error) {
            alert("정보 저장 중 오류가 발생하였습니다.");
            console.error(error);
          });
        console.log("Success:", values);
      };

      const onModifyFailed = (errorInfo) => {
        console.error("Failed:", errorInfo);
      };

      const menu = (
        <Menu onClick={this.showModal}>
          <Menu.Item key="1">내 정보 수정하기</Menu.Item>
        </Menu>
      );

      return (
        <>
          <Dropdown overlay={menu} placement="bottomRight">
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <MoreOutlined />
            </a>
          </Dropdown>
          <Modal
            visible={visible}
            title="내 정보 수정"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                취소
              </Button>,
            ]}
          >
            <Form
              name="myinfo"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              onFinish={onModify}
              onFinishFailed={onModifyFailed}
              style={{ marginTop: "30px" }}
              autoComplete="off"
            >
              <Form.Item
                label="이름 : "
                name="name"
                rules={[{ required: true, message: "이름을 입력해주세요!" }]}
              >
                <Input placeholder={name} />
              </Form.Item>

              <Form.Item
                label="생년월일 : "
                name="birth"
                rules={[
                  { required: true, message: "생년월일을 입력해주세요!" },
                ]}
              >
                <DatePicker placeholder={birth} style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                label="성별 : "
                name="sex"
                rules={[{ required: true, message: "성별을 입력해주세요!" }]}
              >
                <Input placeholder={sex} />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 16, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  수정하기
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </>
      );
    }
  }

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
          <td id="profile-table-info-title">내 정보</td>
          <td id="profile-table-info-ddbutton">
            <ProfileModify />
          </td>
        </tr>
        <tr>
          <td colSpan="2" id="profile-table-info">
            {name}
          </td>
        </tr>
        <tr>
          <td colSpan="2" id="profile-table-info">
            {email}
          </td>
        </tr>
        <tr>
          <td colSpan="2" id="profile-table-info">
            {birth}
          </td>
        </tr>
        <tr>
          <td colSpan="2" id="profile-table-info">
            {sex}
          </td>
        </tr>
        <tr>
          <td id="profile-table-info-iot">IOT 신청여부 :&nbsp;{iot}</td>
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

  //상태 알려주는 태그 (상태에 따라 다른 태그를 띄움)
  function PostTag() {
    return (
      <>
        {/*내가 올린 글 (도움 요청)*/}
        <Tag icon={<ClockCircleOutlined />} color="processing">모집중</Tag>
        <Tag icon={<CheckCircleOutlined />} color="default">모집완료</Tag>
        {/*내가 지원한 글 (도움 지원)*/}
        <Tag icon={<ClockCircleOutlined />} color="gold">요청 대기중</Tag>
        <Tag icon={<CarryOutOutlined />} color="success">지원 완료</Tag>
      </>
    );
  }

  //전체 리스트
  function AllList() {
    return (
      <List
        style={{
          backgroundColor:'#fff',
          padding:'20px'
        }}
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            extra={
              <>
                <img
                  width={'200px'}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
                <div id="volunteer-info-btn">
                  <Button size="small">
                    지원자 정보
                  </Button>
                </div>
              </>
            }
          >            
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            //상태에 따라 다른 태그가 보임 (<PostTag />)
            title={<a href={item.href}>{item.title}&nbsp;&nbsp;&nbsp;<PostTag /></a>}
            description={item.description}
          />
          {item.content}                    
          </List.Item>          
        )}
      />
    );
  }

  //도움 요청 리스트
  function NdHelpList() {
    return (
      <List
        style={{
          backgroundColor:'#fff',
          padding:'20px'
        }}
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            extra={
              <>
                <img
                  width={'200px'}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
                <div id="volunteer-info-btn">
                  <Button size="small">
                    지원자 정보
                  </Button>
                </div>
              </>
            }
          >            
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            //상태에 따라 다른 태그가 보임 (<PostTag />)
            title={<a href={item.href}>{item.title}&nbsp;&nbsp;&nbsp;<PostTag /></a>}
            description={item.description}
          />
          {item.content}                    
          </List.Item>          
        )}
      />
    );
  }

  //도움 지원 리스트
  function GvHelpList() {
    return (
      <List
        style={{
          backgroundColor:'#fff',
          padding:'20px'
        }}
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            extra={
              <img
                width={'200px'}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >            
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            //상태에 따라 다른 태그가 보임 (<PostTag />)
            title={<a href={item.href}>{item.title}&nbsp;&nbsp;&nbsp;<PostTag /></a>}
            description={item.description}
          />
          {item.content}                    
          </List.Item>          
        )}
      />
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
            <div id="mypost-div">
              <div id="mypost-radiobtn-div">
                <RadioBtn />
              </div>
              {/*라디오 버튼에 따라 다른 리스트 보여줌 (AllList, NdHelpLsit, GvHelpList*/}       
              <AllList />
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default MyPage;
