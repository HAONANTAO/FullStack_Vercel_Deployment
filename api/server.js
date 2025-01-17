import express from "express";
import cors from "cors";

const app = express();

// 允许所有来源的 CORS 配置
const corsOptions = {
  origin: "*", // 允许来自任何源的请求
  methods: ["GET", "POST", "PUT", "DELETE"], // 允许的 HTTP 方法
  allowedHeaders: ["Content-Type", "Authorization"], // 允许的请求头
  credentials: true, // 允许发送和接收 cookie 信息
};

// 使用 cors 中间件并应用配置
app.use(cors(corsOptions));

// 定义路由
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Test endpoint works!" });
});

// 本地监听端口
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// 导出应用（Vercel 使用）
export default app;
