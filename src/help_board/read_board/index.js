import "./index.css";
import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";
import { Button, Avatar, Image, Dropdown, Menu, message, Breadcrumb } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
var parse = require("url-parse");

function IndexPage() {

    //예시 데이터 (게시물)
    const post_detail = {
        board_id: 1,
        board_writer: '김테스트',
        board_title: '제에에에목',
        board_content: '서울역 근처에서 이틀간 노인 돌봄이 필요합니다. Post about your forum topic here. Engage your audience with relevant and interesting posts that will keep them coming back for more. Add even more volume to your post by uploading media and engaging your readers with both images and videos. Simply click “Create New Post” to start connecting with your audience now.',
        board_event_time: '2021-12-03 02:35:11',
        board_start_date: '2021-12-10',
        board_end_date: '2021-12-11',
        board_category: '노인',
        board_lat: 37.554722,
        board_lng: 126.970833,
        //위치(board_addr, board_region1Depth, board_region2Depth)
    }

    function NaverMapAPI() {
        const navermaps = window.naver.maps;

        return (
            <NaverMap
                mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
                style={{
                    width: "100%", // 네이버지도 가로 길이
                    height: "300px", // 네이버지도 세로 길이
                }}
                defaultCenter={{ lat: post_detail.board_lat, lng: post_detail.board_lng }} // 도움 요청자가 지정한 위치
                defaultZoom={13} // 지도 초기 확대 배율
            >
                <Marker //위치 마커
                    key={1}
                    position={new navermaps.LatLng(post_detail.board_lat, post_detail.board_lng)}
                    //onClick={}
                />
            </NaverMap>
        );
    }
    
    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">
            글 수정하기
            </Menu.Item>
            <Menu.Item key="2">
            글 삭제하기
            </Menu.Item>
        </Menu>
    );

    function PostDetail() {
        return (
            <div>
                <table id="post-detail-table">
                    <tr>
                        <td colSpan="2" id="post-detail-table-breadcrumb">
                            <Breadcrumb separator=">">
                                <Breadcrumb.Item className={parse()["pathname"] === "/ndhelp" ? "active" : ""} href="/ndhelp">도움 요청 게시판</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">{post_detail.board_category}</Breadcrumb.Item>
                                <Breadcrumb.Item>{post_detail.board_title}</Breadcrumb.Item>
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
                            {post_detail.board_start_date} ~ {post_detail.board_end_date}
                            <Button
                                //onClick={}
                                size="middle"
                                style={{marginTop:"10px"}}
                                >
                                <span>봉사 신청하기</span>
                            </Button>
                        </td>                        
                    </tr>
                    <tr>
                        <td id="post-detail-table-header-left">
                            <Avatar style={{marginRight:"15px"}} src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />                            
                            {post_detail.board_writer}
                        </td>
                        <td id="post-detail-table-header-right">
                            {post_detail.board_event_time}
                            <Dropdown overlay={menu} placement="bottomRight">
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()} >
                                    <MoreOutlined style={{marginLeft:"15px", fontSize:"22px", fontWeight:"bolder"}} />
                                </a>
                            </Dropdown>
                        </td>                                                                                  
                    </tr>
                    <tr>
                        <td colSpan="2" id="post-detail-table-title">{post_detail.board_title}</td>
                    </tr>
                    <tr>
                        <td rowSpan="2" colSpan="2" id="post-detail-table-content">{post_detail.board_content}</td>
                    </tr>
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
