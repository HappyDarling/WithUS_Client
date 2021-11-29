// 현재 사용 중지

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://developers.kakao.com",
      changeOrigin: true,
    })
  );
};
