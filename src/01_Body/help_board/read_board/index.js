// http://localhost:3000/read?id=17

import "./index.css";
import SyncRequest from "sync-request";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";
import {
  Button,
  Avatar,
  Image,
  Dropdown,
  Menu,
  message,
  Breadcrumb,
} from "antd";
import { MoreOutlined } from "@ant-design/icons";
var parse = require("url-parse");

function IndexPage() {
  const [postDetail, setPostDetail] = useState({
    board_id: -1,
    board_writer: "",
    board_title: "",
    board_content: "",
    board_event_time: "",
    board_start_date: "",
    board_end_date: "",
    board_category: "",
    board_lat: -1,
    board_lng: -1,
  });

  useEffect(function () {
    var res = SyncRequest(
      "GET",
      `${process.env.REACT_APP_Backend_Server}/ndhelp/detail?board_id=${
        parse(document.location.href).query.split("=")[1]
      }`
    );

    if (res.statusCode === 200) {
      console.log(JSON.parse(res.body));
      setPostDetail(JSON.parse(res.body));
    } else {
      alert("잘못된 페이지입니다. 메인으로 이동합니다.");
    }
  }, []);

  function NaverMapAPI() {
    const navermaps = window.naver.maps;

    return (
      <NaverMap
        mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
        style={{
          width: "100%", // 네이버지도 가로 길이
          height: "300px", // 네이버지도 세로 길이
        }}
        defaultCenter={{
          lat: postDetail.board_lat,
          lng: postDetail.board_lng,
        }} // 도움 요청자가 지정한 위치
        defaultZoom={13} // 지도 초기 확대 배율
      >
        <Marker //위치 마커
          key={1}
          position={
            new navermaps.LatLng(postDetail.board_lat, postDetail.board_lng)
          }
          //onClick={}
        />
      </NaverMap>
    );
  }

  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">글 수정하기</Menu.Item>
      <Menu.Item key="2">글 삭제하기</Menu.Item>
    </Menu>
  );

  function PostDetail() {
    return (
      <div>
        <table id="post-detail-table">
          <tbody>
            <tr>
              <td colSpan="2" id="post-detail-table-breadcrumb">
                <Breadcrumb separator=">">
                  <Breadcrumb.Item
                    className={
                      parse()["pathname"] === "/ndhelp" ? "active" : ""
                    }
                    href="/ndhelp"
                  >
                    도움 요청 게시판
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="#">
                    {postDetail.board_category}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>{postDetail.board_title}</Breadcrumb.Item>
                </Breadcrumb>
              </td>
              <td rowSpan="4" id="post-detail-table-map">
                <RenderAfterNavermapsLoaded
                  ncpClientId={process.env.REACT_APP_Naver_API_KEY} // 자신의 네이버 계정에서 발급받은 Client ID
                  error={<p>Maps Load Error</p>}
                  loading={<p>Maps Loading...</p>}
                >
                  <NaverMapAPI />
                </RenderAfterNavermapsLoaded>
                <br />
                {postDetail.board_start_date} ~ {postDetail.board_end_date}
                <Button
                  //onClick={}
                  size="middle"
                  style={{ marginTop: "10px" }}
                >
                  <span>봉사 신청하기</span>
                </Button>
              </td>
            </tr>
            <tr>
              <td id="post-detail-table-header-left">
                <Avatar
                  style={{ marginRight: "15px" }}
                  src={
                    <Image
                      src="https://joeschmoe.io/api/v1/random"
                      style={{ width: 32 }}
                    />
                  }
                />
                {postDetail.board_writer}
              </td>
              <td id="post-detail-table-header-right">
                {postDetail.board_event_time}
                <Dropdown overlay={menu} placement="bottomRight">
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MoreOutlined
                      style={{
                        marginLeft: "15px",
                        fontSize: "22px",
                        fontWeight: "bolder",
                      }}
                    />
                  </a>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td colSpan="2" id="post-detail-table-title">
                {postDetail.board_title}
              </td>
            </tr>
            <tr>
              <td rowSpan="2" colSpan="2" id="post-detail-table-content">
                {postDetail.board_content}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div id="read_board-back-color">
      {/* <!-- container --> */}
      <div className="container">
        <div className="read_board-wrapper">
          <div id="read_board-layout">
            <PostDetail />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
