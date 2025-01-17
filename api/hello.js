import express from "express";
import cors from "cors";
const app = express();
app.use(cors()); // 允许跨域请求
app.use(express.json()); // 解析 JSON 数据

app.get("/api/hello", (req, res) => {
  console.log("Received GET request on /api/hello"); // 日志记录
  res.status(200).json({ message: "Hello from the backend!" });
});

export default app;
