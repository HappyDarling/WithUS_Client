import "./index.css";
import { Table, Badge, Space, Button } from 'antd';
import React from "react";

function IndexPage() {

  //회원 정보 (컬럼)
  const columns_meminfo = [
    {
      title: '회원번호',
      dataIndex: 'idx',
      key: 'idx',
      align: 'center',
    },
    {
      title: '이름',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      render: text => <a>{text}</a>,
    },
    {
      title: '이메일',
      dataIndex: 'email',
      key: 'email',
      align: 'center',
    },
    {
      title: '생년월일',
      dataIndex: 'birth',
      key: 'birth',
      align: 'center',
    },
    {
      title: 'IOT 신청여부',
      dataIndex: 'iot',
      key: 'iot',
      align: 'center',
    },
    {
      title: '우울증점수',
      dataIndex: 'dpScore',
      key: 'dpScore',
      align: 'center',
      sorter: {
        compare: (a, b) => a.dpScore - b.dpScore
      },
    },
    {/*
      title: '회원 관리',
      key: 'deleteMember',
      align: 'center',
      render: (text, record) => (
        <a>회원 삭제</a>
      ),
      */},
  ];

  //예시 데이터
  const data_meminfo = [];
  for (let i = 0; i < 12; ++i) { //i는 회원의 수
    data_meminfo.push({
      key: i,
      idx: i+1,
      name: '김테스트',
      email: '123@gmail.com',
      birth: '1983/09/12',
      iot: 'Y',
      dpScore: 76,
    });
  }

  //체크박스가 있는 테이블
  class App extends React.Component {
    
    state = {
      selectedRowKeys: [], // Check here to configure the default column
    };

    //onClick시 회원 삭제하는 메서드
    /*
    delete = () => {
      
    };
    */
  
    onSelectChange = selectedRowKeys => {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.setState({ selectedRowKeys });
    };
    
    render() {
      const { selectedRowKeys } = this.state;
      const rowSelection = {
        selectedRowKeys,
        onChange: this.onSelectChange,
        selections: [
          Table.SELECTION_ALL,
          Table.SELECTION_INVERT,
          Table.SELECTION_NONE,
        ],
      };

      const hasSelected = selectedRowKeys.length > 0;

      return (
        <div>
          <div style={{ textAlign: "left", marginBottom: 16 }}>
            <Button type="primary" onClick={this.delete} disabled={!hasSelected}>
              선택 회원 삭제
            </Button>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
            </span>
          </div>
          <Table
            rowSelection={rowSelection}
            columns={columns_meminfo}
            dataSource={data_meminfo}
            pagination={{
              defaultCurrent: 1,
              pageSize: 5,
                /*페이지네이션 */
                onChange: (page) => {
                  console.log(page);
                }
              }
            }
          />
        </div>  
      );
    }
  }

  //회원 정보 아래에 회원이 쓴 게시글 관리할 수 있는 테이블
  /*
  function NestedTable() {
    const expandedRowRender = () => {
      const columns_memboard = [
        { title: '번호', dataIndex: 'board_id', key: 'board_id', align: 'center' },
        { title: '글 제목', dataIndex: 'board_title', key: 'board_title', align: 'center' },
        { title: '작성일시', dataIndex: 'board_event_time', key: 'board_event_time', align: 'center' },
        {
          title: '글 삭제',
          dataIndex: 'delete',
          key: 'delete',
          align: 'center',
          render: () => (
            <Space size="middle">
              <a>삭제</a>
            </Space>
          ),
        },
        {
          title: '삭제여부',
          key: 'board_deleteYN',
          align: 'center',
          render: () => (
            <span>
              <Badge status="success" />
              deleted
            </span>
          ),
        },
      ];
  
      const data_memboard = [
        {
          board_id: 1,
          board_title: '한강진역 근처 / 일일돌봄 필요',
          board_event_time: '2021-12-02 03:33:12',
        },
      ];
      return (
        <Table
          columns={columns_memboard}
          dataSource={data_memboard}
          pagination={false}
        />
      );
    };
    
    return (
      <Table
        className="components-table-demo-nested"
        columns={columns_meminfo}
        expandable={{ expandedRowRender }}
        dataSource={data_meminfo}
        //페이지네이션
        pagination={{
          defaultCurrent: 1,
          total: 10,
          pageSize: 5,            
            onChange: (page) => {
              console.log(page);
            }
          }          
        }     
      />
    );
  }
  */

  //우울증 점수로 정렬(오름차순, 내림차순, 정렬취소)
  function onSort(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
    
  return (
    <div>
      {/* <!-- container --> */}
      <div className="container">
        <div className="mng-wrapper">
          <div id="mng-member-title">
              <p>회원 명단</p>
          </div>
          <div id="mng-member-table">
            {/*체크박스 테이블 */}
            <App
              onChange={onSort}         
            />
            {/*게시글 관리 기능 있는 테이블 */}
            {/*   
            <NestedTable
              onChange={onSort}
            />
            */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
