import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://ic-realestate-server.onrender.com",
      changeOrigin: true,
    })
  );
};
