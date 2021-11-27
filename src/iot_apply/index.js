import "./index.css";

function IndexPage() {
  const contentStyle = {
    height: "240px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div>
      {/* <!-- container --> */}
      <div className="container">
        <div id="iot-apply-title">
            <p>IOT 신청하기</p>
        </div>
        <div>
            사진
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
