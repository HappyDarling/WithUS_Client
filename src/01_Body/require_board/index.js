import React, { useState } from "react";
import { Form, Input, Radio, DatePicker, Button } from "antd";

function RequireBoardPage() {
  // 게시글 등록 Submit 함수
  const onPostFinish = (values) => {
    // values.addr1 = addr1;

    // if (res.status === "OK") {
    //   console.log(res.result.point.x);
    //   console.log(res.result.point.y);
    // } else {
    //   console.log(res.body);
    // }

    console.log("Received values of form: ", values);
  };

  return (
    <div className="container">
      <Form
        onFinish={onPostFinish}
        style={{ marginTop: "20px" }}
        size={"large"}
      >
        <div className="row">
          <div className="col-xs-4 col-md-4">
            <Form.Item
              name="username"
              rules={[{ required: true, message: "이름을 입력해주세요!" }]}
              style={{ margin: "0px" }}
            >
              <Input placeholder="이름" />
            </Form.Item>
          </div>
          <div class="col-xs-4 col-md-4">
            <Form.Item
              name="birth"
              rules={[{ required: true, message: "생일을 입력해주세요!" }]}
            >
              <DatePicker placeholder="생일" style={{ width: "100%" }} />
            </Form.Item>
          </div>
          <div class="col-xs-4 col-md-4">
            <Form.Item
              name="gender"
              rules={[{ required: true, message: "성별을 입력해주세요!" }]}
            >
              <Radio.Group>
                <Radio.Button value="남성">남성</Radio.Button>
                <Radio.Button value="여성">여성</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "이메일을 입력해주세요!",
                },
              ]}
            >
              <Input placeholder="이메일을 입력해주세요" />
            </Form.Item>
          </div>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default RequireBoardPage;
