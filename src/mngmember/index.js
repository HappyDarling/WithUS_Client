import "./index.css";
import { List, Avatar } from 'antd';
import { Button } from 'antd';

function IndexPage() {

    const data = [
        {
          title: '회원 1',
        },
        {
          title: '회원 2',
        },
        {
          title: '회원 3',
        },
        {
          title: '회원 4',
        },
    ];
    
  return (
    <div>
      {/* <!-- container --> */}
      <div className="container">
        <div className="mng-wrapper">
          <div id="mng-member-title">
              <p>회원 명단</p>
          </div>
          <div></div>
          <div id="list-wrapper">
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                    <Button
                        //onClick={}
                        size="large"
                        >
                        <span>회원 관리</span>
                    </Button>
                </List.Item>
                )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
