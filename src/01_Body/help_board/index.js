import "./index.css";
import React, { useEffect } from "react";
import useState from "react-usestateref";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { Row, Col, Card, Avatar } from "antd";
import { Pagination } from "antd";
import {
  ReadOutlined,
  CheckOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

function HelpBoardPage() {
  // 카테고리, 페이지 변경 감지 State
  const [category, setCategory, categoryRef] = useState("전체");
  const [page, setPage, pageRef] = useState(1);

  // 서버에서 게시글 목록을 받아오는 비동기 useEffect 구문
  const [postList, setPostList] = useState({ data: [] });

  function pageSearch() {
    axios
      .get(
        `${process.env.REACT_APP_Backend_Server}ndhelp?board_category=${categoryRef.current}&page=${pageRef.current}&keyword=`
      )
      .then(function (result) {
        // 결과의 포스트 리스트를 추출할 수 있는 변수
        console.log(result);
        const posts = result;
        setPostList(posts);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(pageSearch, []);

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
                setCategory("전체");
                pageSearch();
              }}
            >
              <img src="./images/board_icon/icon_all.png" alt="전체" />
            </a>
            <a
              className="icon"
              onClick={() => {
                setCategory("노약자");
                pageSearch();
              }}
            >
              <img src="./images/board_icon/icon_elderly.png" alt="노인" />
            </a>
            <a
              className="icon"
              onClick={() => {
                setCategory("장애인");
                pageSearch();
              }}
            >
              <img
                src="./images/board_icon/icon_disabled.png"
                alt="장애인"
                width="100px"
              />
            </a>
            <a
              className="icon"
              onClick={() => {
                setCategory("아동");
                pageSearch();
              }}
            >
              <img
                src="./images/board_icon/icon_children.png"
                alt="어린이"
                width="100px"
              />
            </a>
            <a
              className="icon"
              onClick={() => {
                setCategory("고독");
                pageSearch();
              }}
            >
              <img
                src="./images/board_icon/icon_lonley.png"
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
        {/* 페이지 넘기기 */}
        <div id="pagnation">
          <Pagination
            simple
            defaultCurrent={1}
            defaultPageSize={9}
            total={1}
            onChange={function (curr_page, number) {
              setPage(curr_page);
              pageSearch();
            }}
          />
          <br />
          {/* <Pagination disabled simple defaultCurrent={1} total={50} /> */}
        </div>
      </div>
    </div>
  );
}

export default HelpBoardPage;