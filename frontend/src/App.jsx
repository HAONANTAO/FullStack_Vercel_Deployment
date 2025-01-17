import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 使用后端的完整 URL 发起请求
    axios
      .get("/api/hello", {
        withCredentials: true, // 如果请求需要携带凭证（cookies）
      })
      .then((response) => {
        setMessage(response.data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend and Backend Connected!</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
