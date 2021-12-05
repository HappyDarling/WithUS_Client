import axios from "axios";
import React, { useState, useEffect } from "react";
import { Drawer, Descriptions, Badge, Button } from "antd";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";
import { googleIsLogin } from "../../module/googleIsLogin";
import { kakaoIsLogin } from "../../module/kakaoIsLogin";
import { requireFieldCheck } from "../../API/requireFieldCheckAPI";

// 전역으로 State 관리
var visible, setVisible;
var addr, setAddr;
var title, setTitle;
var startDate, setStartDate;
var endDate, setEndDate;
var category, setCategory;
var id, setId;

function NaverMapAPI() {
  // 지워야함 (CG)
  const testMapData = {
    testData: [
      {
        location: {
          board_lat: "37.551229",
          board_lng: "126.970833",
          board_addr: "서울특별시 용산구 용산2가동 남산공원길 105",
        },
        post: {
          board_id: "1",
          board_writer: "김경록",
          board_title: "외로운 청소년에게 힘을 불어 넣어 주세요",
          board_start_date: "2021.12.01",
          board_end_date: "2021.12.10",
          board_category: "고독",
          board_close: false,
        },
      },
      {
        location: {
          board_lat: "37.223071",
          board_lng: "127.168686",
          board_addr: "경기도 용인시 처인구 이동면 서리",
        },
        post: {
          board_id: "2",
          board_writer: "김경2",
          board_title: "테스트 데이터",
          board_start_date: "2021.12.01",
          board_end_date: "2021.12.10",
          board_category: "노인",
        },
      },
    ],
  };
  // 지워야함 (CG)

  // 서버에서 게시글 목록을 받아오는 비동기 useEffect 구문
  const [mapList, setMapList] = React.useState({ data: [] });
  React.useEffect(function () {
    axios
      .get(
        `https://withusyoume.herokuapp.com/${process.env.REACT_APP_Backend_Server}/gvhelp?board_lat=&board_lng=&board_addr=&board_region1Depth=&board_region2Depth=`
      )
      .then(function (result) {
        // 결과의 포스트 리스트를 추출할 수 있는 변수
        console.log(result);
        setMapList(result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const navermaps = window.naver.maps;

  return (
    <NaverMap
      mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
      style={{
        width: "100%", // 네이버지도 가로 길이
        height: "85vh", // 네이버지도 세로 길이
      }}
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
      defaultZoom={13} // 지도 초기 확대 배율
    >
      {/* API URL에서 받은 데이터 부분으로 바꿔야 함 (CG) */}
      {mapList.data.map(function (mapData, index) {
        return (
          <Marker
            key={index}
            position={navermaps.LatLng(
              mapData.location.board_lat,
              mapData.location.board_lng
            )}
            animation={1}
            onClick={() => {
              setVisible(true);
              setAddr(mapData.location.board_addr);
              setTitle(mapData.post.board_title);
              setCategory(mapData.post.board_category);
              setStartDate(mapData.post.board_start_date);
              setEndDate(mapData.post.board_end_date);
            }}
          />
        );
      })}
    </NaverMap>
  );
}

function GVHelpPage() {
  const { Kakao } = window;

  // 전역으로 State 관리
  [visible, setVisible] = useState(false);
  [addr, setAddr] = useState("");
  [title, setTitle] = useState("");
  [category, setCategory] = useState("");
  [startDate, setStartDate] = useState("");
  [endDate, setEndDate] = useState("");

  // Drawer창의 Btn Click Event
  const onReadPostBtn = () => {};

  const onApplyBtn = () => {
    if (Kakao.Auth.getAccessToken()) {
      kakaoIsLogin()
        .then()
        .catch((err) => {
          alert("인증 정보가 유효하지 않습니다!");
          window.history.go(0);
          return;
        });
    } else if (JSON.parse(sessionStorage.getItem("user"))) {
      googleIsLogin()
        .then()
        .catch((err) => {
          alert("인증 정보가 유효하지 않습니다!");
          window.history.go(0);
          return;
        });
    } else {
      alert("로그인이 되어있지 않습니다!");
      window.history.go(0);
      return;
    }

    // 사이트를 이용하기 위한 필수 Field들이 서버에 있는지 체크
    requireFieldCheck(sessionStorage.getItem("email"))
      .then((res) => {
        alert("성공");
        console.log("res");
      })
      .catch((err) => {
        alert(
          "사이트를 이용하기 위한 필수 값이 입력 되어있지 않아 입력 페이지로 이동합니다."
        );
        window.location.href = "/require";
        return;
      });
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container">
      <Drawer
        placement={"right"}
        width={500}
        onClose={onClose}
        visible={visible}
      >
        <Descriptions title="상세 정보" layout="vertical" bordered>
          <Descriptions.Item label="상세 주소" span={3}>
            {addr}
          </Descriptions.Item>
          <Descriptions.Item label="제목" span={3}>
            {title}
          </Descriptions.Item>
          <Descriptions.Item label="카테고리">{category}</Descriptions.Item>
          <Descriptions.Item label="시작 일시">{startDate}</Descriptions.Item>
          <Descriptions.Item label="종료 일시">{endDate}</Descriptions.Item>
          <Descriptions.Item label="상태">
            <Badge status="processing" text="모집중" />
          </Descriptions.Item>
        </Descriptions>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          <Button size="large">게시글로</Button>
          <Button type="primary" size="large" onClick={onApplyBtn}>
            지원하기
          </Button>
        </div>
      </Drawer>
      <RenderAfterNavermapsLoaded
        ncpClientId={process.env.REACT_APP_Naver_API_KEY} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMapAPI />
      </RenderAfterNavermapsLoaded>
    </div>
  );
}

export default GVHelpPage;
