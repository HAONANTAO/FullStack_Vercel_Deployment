import { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Click the button to fetch a message");

  // 定义一个异步函数来获取数据
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/hello");
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Fullstack Vercel Project</h1>
        <p>{message}</p>
        {/* 创建一个按钮并绑定点击事件 */}
        <button onClick={fetchData}>Fetch Message</button>
      </header>
    </div>
  );
}

export default App;
